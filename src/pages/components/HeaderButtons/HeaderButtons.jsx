import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import MinusIcon from "@rsuite/icons/Minus";
import PlusIcon from "@rsuite/icons/legacy/Plus";
import styles from "./HeaderButtons.module.css";
import MemoryPicker from "../MemoryPicker/MemoryPicker";
import { useState } from "react";
const { ipcRenderer } = window.require("electron");
const HeaderButtons = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <>
      <div className={styles.buttons}>
        <button>
          <GearCircleIcon onClick={() => setSettingsOpen(true)} />
        </button>
        <button
          className={styles.minus}
          onClick={() => ipcRenderer.send("hide-window")}
        >
          <MinusIcon />
        </button>
        <button
          className={styles.close}
          onClick={() => ipcRenderer.send("close-window")}
        >
          <PlusIcon />
        </button>
      </div>
      <MemoryPicker open={settingsOpen} setOpen={setSettingsOpen} />
    </>
  );
};

export default HeaderButtons;
