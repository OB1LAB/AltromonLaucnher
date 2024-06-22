import styles from "./ExternalInfo.module.css";
const ExternalInfo = () => {
  return (
    <div className={styles.socials}>
      <img src="./discord.svg" width={48} height={48} alt="discord" />
      <img
        src="./OB1LAB.png"
        width={48}
        height={48}
        alt="site"
        className={styles.round}
      />
    </div>
  );
};

export default ExternalInfo;
