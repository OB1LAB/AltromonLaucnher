import styles from "./ChangeLog.module.css";
import { Accordion } from "rsuite";

const ChangeLog = ({ description, selectedServer }) => {
  return (
    <div className={styles.changeLog}>
      <div className={`${styles.block} ${styles.text}`}>Список Изменений</div>
      {description[selectedServer].changeLog.map((update, index) => {
        return (
          <div key={index}>
            <div className={styles.dateBlock}>
              <div>{update.date}</div>
              <div className={styles.border} />
            </div>
            <div className={styles.actions}>
              {update.actions.map((action, actionIndex) => {
                return (
                  <div
                    key={actionIndex}
                    className={`${styles.block} ${styles.update}`}
                  >
                    <div className={styles.icon}>
                      {action.type === "add" ? (
                        <img src="accept.png" alt="accept" />
                      ) : action.type === "edit" ? (
                        <img src="wrench.png" alt="wrench" />
                      ) : (
                        <img src="delete.png" alt="cancel" />
                      )}
                    </div>
                    {Object.keys(action).includes("about") &&
                    action.about !== "" ? (
                      <Accordion bordered={false}>
                        <Accordion.Panel
                          bodyFill={false}
                          header={action.content}
                        >
                          {action.about}
                        </Accordion.Panel>
                      </Accordion>
                    ) : (
                      <div className={styles.center}>{action.content}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChangeLog;
