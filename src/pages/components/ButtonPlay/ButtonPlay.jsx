import styles from "./ButtonPlay.module.css";
const { ipcRenderer } = window.require("electron");
const ButtonPlay = ({ action }) => {
  return (
    <button
      className={styles.play}
      onClick={() => {
        ipcRenderer.send("start-game");
        action();
      }}
    >
      ЗАПУСК
    </button>
  );
};
export default ButtonPlay;
