import LauncherPage from "./pages/LauncherPage";
import { useEffect, useState } from "react";
import AuthPage from "./pages/AuthPage";
import "./pages/AuthPage.css";
import ModalLoading from "./pages/components/ModalLoading/ModalLoading";
const { ipcRenderer } = window.require("electron");

function App() {
  const [player, setPlayer] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    ipcRenderer.send("launcher-getPlayer", "");
    ipcRenderer.once("reply-player", (event, data) => {
      if (data) {
        setPlayer(data);
        setIsAuth(true);
      }
    });
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <div className="launcher">
        <AuthPage player={player} setPlayer={setPlayer} setIsAuth={setIsAuth} />
        <ModalLoading />
      </div>
    );
  }
  return (
    <div className="launcher">
      {isAuth ? (
        <LauncherPage player={player} setIsAuth={setIsAuth} />
      ) : (
        <AuthPage player={player} setPlayer={setPlayer} setIsAuth={setIsAuth} />
      )}
    </div>
  );
}

export default App;
