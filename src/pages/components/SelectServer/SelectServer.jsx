import { InputPicker, Tooltip, Whisper } from "rsuite";
import styles from "./SelectServer.module.css";
import { useEffect, useState } from "react";
import OnlineService from "../../../services/OnlineService";
const { ipcRenderer } = window.require("electron");

const SelectServer = ({ selectedServer, setSelectedServer, description }) => {
  const [online, setOnline] = useState({});
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
        value={selectedServer}
        onChange={(server) => {
          setSelectedServer(server);
          ipcRenderer.send("launcher-setServer", server);
        }}
        data={Object.keys(description).map((item) => {
          return {
            label: description[item].name,
            value: item,
          };
        })}
        placement="topEnd"
        style={{ width: 180 }}
      />
      <Whisper
        placement="top"
        speaker={
          <Tooltip>
            {Object.keys(online).includes(selectedServer) &&
            online[selectedServer].length > 0
              ? online[selectedServer].map((player) => {
                  return <div key={player}>{player}</div>;
                })
              : "Список пустой"}
          </Tooltip>
        }
      >
        <div>
          Онлайн:{" "}
          {Object.keys(online).includes(selectedServer)
            ? online[selectedServer].length
            : 0}
        </div>
      </Whisper>
    </div>
  );
};

export default SelectServer;
