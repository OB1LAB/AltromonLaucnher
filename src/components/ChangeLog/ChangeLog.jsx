import styles from "./ChangeLog.module.css";
import { Accordion } from "rsuite";

const dataUpdate = [
  {
    date: "17 июня",
    actions: [
      {
        type: "edit",
        content: "Industrial Upgrade",
        about: "Добавлен крафт пластиковой пластины в репликатор",
      },
      {
        type: "remove",
        content: "Удален мод Power Utilities",
        about: "Теперь встроенный в Industrial Upgrade",
      },
    ],
  },
  {
    date: "14 июня",
    actions: [
      {
        type: "add",
        content: "Добавлен аддон к AE2",
        about: "Хранилища создания и обработки и прочее",
      },
      {
        type: "add",
        content: "Добавлен мод Power Converters",
      },
      {
        type: "edit",
        content: "Изменен конфиг мода Industrial Upgrade",
      },
      {
        type: "remove",
        content: "Удален мод Energy Converters",
      },
    ],
  },
  {
    date: "9 июня",
    actions: [
      {
        type: "add",
        content: "Добавлен мод EnderIO",
      },
      {
        type: "add",
        content: "Добавлен аддон Endergy (EnderIO)",
      },
      {
        type: "add",
        content: "Добавлен мод Extra Utilities 2",
      },
      {
        type: "add",
        content: "Добавлен мод Mekanism",
      },
      {
        type: "add",
        content: "Добавлен аддон Mekanism Generators",
      },
      {
        type: "add",
        content: "Добавлен мод Energy Converters",
      },
      {
        type: "add",
        content: "Добавлен аддон LazyAE2",
      },
      {
        type: "add",
        content: "Добавлен аддон AE Additions",
      },
      {
        type: "add",
        content: "Добавлен клиентский мод ClientFixer",
      },
      {
        type: "add",
        content: "Добавлен аддон Industrial Upgrade",
      },
      {
        type: "edit",
        content: "Изменена версия Industrial Craft 2",
        about: '"industrialcraft-2-2.8.176-ex112.jar"',
      },
      {
        type: "edit",
        content: "Установлена комьюнити версия Applied Energistics 2 (Fork)",
        about: '"appliedenergistics2-rv6-stable-7.jar"',
      },
      {
        type: "remove",
        content: "Удален мод Advanced Solar Panels",
      },
    ],
  },
  {
    date: "27 мая",
    actions: [
      {
        type: "add",
        content: "Запуск сервера",
      },
    ],
  },
];

const ChangeLog = () => {
  return (
    <div className={styles.changeLog}>
      <div className={`${styles.block} ${styles.text}`}>Список Изменений</div>
      {dataUpdate.map((update, index) => {
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
                    className={`${styles.block} ${styles.update} ${action.type === "add" ? styles.green : action.type === "edit" ? styles.orange : styles.red}`}
                  >
                    <div className={styles.icon}>
                      {action.type === "add" ? (
                        <span>✓</span>
                      ) : action.type === "edit" ? (
                        <span style={{ scale: "0.9" }}>{"</>"}</span>
                      ) : (
                        <span>✖</span>
                      )}
                    </div>
                    {Object.keys(action).includes("about") ? (
                      <Accordion bordered={false}>
                        <Accordion.Panel
                          bodyFill={false}
                          header={action.content}
                        >
                          {action.about}
                        </Accordion.Panel>
                      </Accordion>
                    ) : (
                      <div>{action.content}</div>
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
