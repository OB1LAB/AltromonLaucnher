import styles from "./ModalLoading.module.css";
import { Blocks } from "react-loader-spinner";
const ModalStart = () => {
  return (
    <div className={`${styles.modal} ${styles.active}`}>
      <div className={styles.content}>
        <div className={styles.body}>
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            wrapperStyle={{}}
            visible={true}
          />
          <div>Загрука...</div>
        </div>
      </div>
    </div>
  );
};
export default ModalStart;
