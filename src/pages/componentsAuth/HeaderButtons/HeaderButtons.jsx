import MinusIcon from "@rsuite/icons/Minus";
import PlusIcon from "@rsuite/icons/legacy/Plus";
import styles from "./HeaderButtons.module.css";
const { ipcRenderer } = window.require("electron");
const HeaderButtons = () => {
  return (
    <div className={styles.buttons}>
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
  );
};

export default HeaderButtons;
