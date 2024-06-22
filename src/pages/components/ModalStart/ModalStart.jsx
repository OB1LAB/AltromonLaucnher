import { Progress } from "rsuite";
import styles from "./ModalStart.module.css";
import { Blocks } from "react-loader-spinner";
const ModalStart = ({ text, progress, awaiting, open, step }) => {
  return (
    <div className={open ? `${styles.modal} ${styles.active}` : styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>Загрузчик</div>
        <div className={styles.body}>
          <div className={awaiting ? styles.status : ""}>
            {step}
            {awaiting && (
              <Blocks
                height="80"
                width="80"
                color="#4fa94d"
                wrapperStyle={{}}
                visible={true}
              />
            )}
          </div>
          {!awaiting && <div>{text}</div>}
        </div>
        {!awaiting && (
          <Progress.Line
            percent={progress}
            strokeColor={progress === 100 ? "#52c41a" : "#4148ba"}
            status={progress === 100 ? "success" : null}
          />
        )}
      </div>
    </div>
  );
};
export default ModalStart;
