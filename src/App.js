import LauncherPage from "./pages/LauncherPage";
import { useEffect, useState } from "react";
import AuthPage from "./pages/AuthPage";
import "./pages/AuthPage.css";
import ModalLoading from "./pages/components/ModalLoading/ModalLoading";
import AuthService from "./services/AuthService";
const { ipcRenderer } = window.require("electron");

function App() {
  const [selectedServer, setSelectedServer] = useState("Hitech_1.12.2_forge");
  const [rToken, setRToken] = useState("");
  const [player, setPlayer] = useState("");
  const [password, setPassword] = useState("");
  const [registerPlayer, setRegisterPlayer] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerRetryPassword, setRegisterRetryPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState({
    "Hitech_1.12.2_forge": {
      about: "Инфа про Хайтек",
      mods: "Есть",
      changeLog: [],
    },
    "Survival_1.20.1_vanila": {
      about: "Инфа про Ванилу",
      mods: "Есть",
      changeLog: [],
    },
  });
  const login = async (playerLauncher, passwordLauncher) => {
    try {
      const res = await AuthService.login(playerLauncher, passwordLauncher);
      const { uuid, accessToken, description } = res.data;
      ipcRenderer.send("launcher-setPlayer", {
        player: playerLauncher,
        password: passwordLauncher,
        uuid,
        accessToken,
      });
      setDescription(description);
      setPlayer(playerLauncher);
      setIsAuth(true);
    } catch (e) {}
  };
  useEffect(() => {
    ipcRenderer.send("launcher-getPlayer", "");
    ipcRenderer.once("reply-player", (event, data) => {
      if (data) {
        setPlayer(data.player);
        setPassword(data.password);
        if (data.selectedServer) {
          setSelectedServer(data.selectedServer);
        }
        login(data.player, data.password);
      }
    });
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <div className="launcher">
        <AuthPage
          player={player}
          setPlayer={setPlayer}
          setIsAuth={setIsAuth}
          password={password}
          setPassword={setPassword}
          registerPlayer={registerPlayer}
          registerPassword={registerPassword}
          registerRetryPassword={registerRetryPassword}
          setRegisterPlayer={setRegisterPlayer}
          setRegisterPassword={setRegisterPassword}
          setRegisterRetryPassword={setRegisterRetryPassword}
          rToken={rToken}
          setRToken={setRToken}
          setDescription={setDescription}
        />
        <ModalLoading />
      </div>
    );
  }
  return (
    <div className="launcher">
      {isAuth ? (
        <LauncherPage
          player={player}
          setIsAuth={setIsAuth}
          description={description}
          selectedServer={selectedServer}
          setSelectedServer={setSelectedServer}
        />
      ) : (
        <AuthPage
          player={player}
          setPlayer={setPlayer}
          setIsAuth={setIsAuth}
          password={password}
          setPassword={setPassword}
          registerPlayer={registerPlayer}
          registerPassword={registerPassword}
          registerRetryPassword={registerRetryPassword}
          setRegisterPlayer={setRegisterPlayer}
          setRegisterPassword={setRegisterPassword}
          setRegisterRetryPassword={setRegisterRetryPassword}
          rToken={rToken}
          setRToken={setRToken}
          setDescription={setDescription}
        />
      )}
    </div>
  );
}

export default App;
