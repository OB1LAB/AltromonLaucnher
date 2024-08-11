import styles from "./ExternalInfo.module.css";
const shell = window.require("electron").shell;
const ExternalInfo = () => {
  return (
    <div className={styles.socials}>
      <img
        onClick={() => {
          shell.openExternal("https://discord.gg/9hWNXv2FpY");
        }}
        src="./discord.svg"
        width={48}
        height={48}
        alt="discord"
      />
      <img
        src="./OB1LAB.png"
        width={48}
        height={48}
        alt="site"
        className={styles.round}
        onClick={() => {
          shell.openExternal("https://altromon.ob1lab.ru");
        }}
      />
    </div>
  );
};

export default ExternalInfo;
