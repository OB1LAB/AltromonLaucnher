import { InputPicker } from "rsuite";
import styles from "./SelectServer.module.css";

const data = [
  {
    label: "HiTech 1.12.2",
    value: "Hitech_1.12.2_forge",
  },
  {
    label: "Survival 1.18.2",
    value: "Survival_1.18.2_vanila",
  },
];

const online = {
  "Survival_1.18.2_vanila": 3,
  "Hitech_1.12.2_forge": 5,
};

const SelectServer = ({ selectedServer, setSelectedServer }) => {
  return (
    <div className={styles.picker}>
      <InputPicker
        block
        cleanable={false}
        defaultValue={"Hitech_1.12.2_forge"}
        value={selectedServer}
        onChange={setSelectedServer}
        data={data}
        placement="topEnd"
        searchable={false}
        style={{ width: 180 }}
      />
      <div>Онлайн: {online[selectedServer]}</div>
    </div>
  );
};

export default SelectServer;
