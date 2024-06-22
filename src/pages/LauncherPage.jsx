import "./LauncherPage.css";
import ButtonPlay from "./components/ButtonPlay/ButtonPlay";
import ExternalInfo from "./components/ExternalInfo/ExternalInfo";
import HeaderButtons from "./components/HeaderButtons/HeaderButtons";
import Description from "./components/Description/Description";
import ChangeLog from "./components/ChangeLog/ChangeLog";
import ModalStart from "./components/ModalStart/ModalStart";
import { useEffect, useState } from "react";
import HeaderPlayer from "./components/HeaderPlayer/HeaderPlayer";
import SelectServer from "./components/SelectServer/SelectServer";
const { ipcRenderer } = window.require("electron");

function LauncherPage({ player, setIsAuth }) {
  const [selectedServer, setSelectedServer] = useState("Hitech_1.12.2_forge");
  const [step, setStep] = useState("Ожидание лаунчера");
  const [content, setContent] = useState("");
  const [progressDownload, setProgressDownload] = useState(0);
  const [initGame, setInitGame] = useState(false);
  const [modal, setModal] = useState(false);
  const launcherInitGame = () => {
    setStep("Инициализация игры");
    setInitGame(true);
  };
  useEffect(() => {
    ipcRenderer.on("launcher-download", (event, data) => {
      setStep(data.step);
      setContent(data.content);
      setProgressDownload(data.progress);
    });
    ipcRenderer.on("launcher-gameInit", () => launcherInitGame());
    return () => {
      ipcRenderer.off("launcher-download", (event, data) => {
        setStep(data.step);
        setContent(data.content);
        setProgressDownload(data.progress);
      });
      ipcRenderer.off("launcher-gameInit", () => launcherInitGame());
    };
  }, []);
  return (
    <div>
      <div className="header">
        <div className="name">ALTROMON</div>
        <HeaderPlayer player={player} setIsAuth={setIsAuth} />
        <HeaderButtons />
      </div>
      <div className="body">
        <Description />
        <ChangeLog />
      </div>
      <div className="footer">
        <ButtonPlay action={() => setModal(true)} />
        <SelectServer
          selectedServer={selectedServer}
          setSelectedServer={setSelectedServer}
        />
        <ExternalInfo />
      </div>
      <ModalStart
        text={content}
        awaiting={initGame}
        progress={progressDownload}
        open={modal}
        step={step}
      />
    </div>
  );
}

export default LauncherPage;
