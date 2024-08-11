import { InputPicker, Tooltip, Whisper } from "rsuite";
import styles from "./SelectServer.module.css";
import { useEffect, useState } from "react";
import OnlineService from "../../../services/OnlineService";
const { ipcRenderer } = window.require("electron");

const data = [
  {
    label: "HiTech 1.12.2",
    value: "Hitech_1.12.2_forge",
  },
  {
    label: "Survival 1.20.1",
    value: "Survival_1.20.1_vanila",
  },
];

const SelectServer = ({ selectedServer, setSelectedServer }) => {
  const [online, setOnline] = useState({
    "Survival_1.20.1_vanila": [],
    "Hitech_1.12.2_forge": [],
  });
  const getOnline = async () => {
    try {
      const res = await OnlineService.get();
      setOnline(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(getOnline, 5 * 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={styles.picker}>
      <InputPicker
        block
        searchable={false}
        cleanable={false}
        defaultValue={"Hitech_1.12.2_forge"}
        value={selectedServer}
        onChange={(server) => {
          setSelectedServer(server);
          ipcRenderer.send("launcher-setServer", server);
        }}
        data={data}
        placement="topEnd"
        style={{ width: 180 }}
      />
      <Whisper
        placement="top"
        speaker={
          <Tooltip>
            {online[selectedServer].length > 0
              ? online[selectedServer].map((player) => {
                  return <div key={player}>{player}</div>;
                })
              : "Список пустой"}
          </Tooltip>
        }
      >
        <div>Онлайн: {online[selectedServer].length}</div>
      </Whisper>
    </div>
  );
};

export default SelectServer;
