import styles from "./Login.module.css";
import AuthService from "../../../services/AuthService";
import { toast } from "react-toastify";
const { ipcRenderer } = window.require("electron");
const Login = ({
  setIsAuth,
  player,
  setPlayer,
  password,
  setPassword,
  setDescription,
  selectedServer,
  setSelectedServer,
}) => {
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      login();
    }
  };
  const login = async () => {
    const toastId = toast.loading("Авторизируем...");
    try {
      const res = await AuthService.login(player, password);
      const { uuid, accessToken, description } = res.data;
      toast.update(toastId, {
        render: "Авторизирован",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      ipcRenderer.send("launcher-setPlayer", {
        player,
        password,
        uuid,
        accessToken,
        description,
      });
      setDescription(description);
      if (
        selectedServer.length === 0 ||
        !Object.keys(description).includes(selectedServer)
      ) {
        setSelectedServer(Object.keys(description)[0]);
      }
      setIsAuth(true);
    } catch (e) {
      toast.update(toastId, {
        render: e.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.authText}>Авторизация</div>
      <div className={styles.forms}>
        <input
          value={player}
          onChange={(value) => setPlayer(value.target.value)}
          placeholder="логин"
          onKeyUp={onKeyPress}
        />
        <input
          placeholder="пароль"
          type="password"
          onKeyUp={onKeyPress}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={login}>ВОЙТИ</button>
      </div>
    </div>
  );
};

export default Login;
