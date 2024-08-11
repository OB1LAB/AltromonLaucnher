import styles from "./Description.module.css";

const Description = ({ description, selectedServer }) => {
  return (
    <div className={styles.description}>
      <div className={`${styles.block} ${styles.about}`}>Описание</div>
      <div className={styles.block}>{description[selectedServer].about}</div>
      <div className={styles.block}>
        {description[selectedServer].mods.split("\n").map((mod, index) => (
          <div key={index}>{mod}</div>
        ))}
      </div>
    </div>
  );
};

export default Description;
