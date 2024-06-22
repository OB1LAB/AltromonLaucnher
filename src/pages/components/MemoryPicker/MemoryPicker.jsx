import { useEffect, useState } from "react";
import styles from "./MemoryPicker.module.css";
import { Slider } from "rsuite";
const { ipcRenderer } = window.require("electron");

const MemoryPicker = ({ open, setOpen }) => {
  const [memory, setMemory] = useState(4);
  useEffect(() => {
    ipcRenderer.send("launcher-getRam", "");
    ipcRenderer.once("reply-ram", (event, data) => {
      setMemory(data);
    });
  }, []);
  return (
    <div className={open ? `${styles.modal} ${styles.active}` : styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>Настройки</div>
        <div className={styles.body}>
          <div>Рекомендуемый объём: 4-6 гигабайтов</div>
          <Slider
            className={styles.picker}
            value={memory}
            onChange={(value) => {
              if (value !== memory) {
                setMemory(value);
                ipcRenderer.send("launcher-setRam", value);
              }
            }}
            step={2}
            graduated
            progress
            min={2}
            max={16}
            renderMark={(mark) => {
              return <span>{mark} GB</span>;
            }}
          />
          <div className={styles.buttons}>
            <button onClick={() => ipcRenderer.send("launcher-openFolder", "")}>
              Открыть директорию
            </button>
            <button className={styles.close} onClick={() => setOpen(false)}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryPicker;
