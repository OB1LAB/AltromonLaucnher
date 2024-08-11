import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Register.module.css";
import { toast } from "react-toastify";
import AuthService from "../../../services/AuthService";
const { ipcRenderer } = window.require("electron");
const Register = ({
  setPage,
  setPlayer,
  setPassword,
  registerPlayer,
  setRegisterPlayer,
  registerPassword,
  setRegisterPassword,
  registerRetryPassword,
  setRegisterRetryPassword,
  rToken,
  setRToken,
  setIsAuth,
  setDescription,
}) => {
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      register();
    }
  };
  const register = async () => {
    if (registerPassword !== registerRetryPassword) {
      return toast("Пароли должны совпадать", {
        render: "Пароли должны совпадать",
        type: "error",
        autoClose: 3000,
      });
    }
    if (!rToken) {
      return toast('Не выполнена проверка "Я не робот"', {
        render: "Пароли должны совпадать",
        type: "error",
        autoClose: 3000,
      });
    }
    const toastId = toast.loading("Регистрация...");
    try {
      await AuthService.register(registerPlayer, registerPassword, rToken);
      const res = await AuthService.login(registerPlayer, registerPassword);
      const { uuid, accessToken, description } = res.data;
      toast.update(toastId, {
        render: "Зарегистрирован",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      ipcRenderer.send("launcher-setPlayer", {
        player: registerPlayer,
        password: registerPassword,
        uuid,
        accessToken,
      });
      setDescription(description);
      setPlayer(registerPlayer);
      setPassword(registerPassword);
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
      <div className={styles.authText}>Регистрация</div>
      <div className={styles.forms}>
        <input
          placeholder="логин"
          value={registerPlayer}
          onChange={(e) => setRegisterPlayer(e.target.value)}
          onKeyUp={onKeyPress}
        />
        <input
          type="password"
          placeholder="пароль"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          onKeyUp={onKeyPress}
        />
        <input
          type="password"
          placeholder="повтор пароля"
          value={registerRetryPassword}
          onChange={(e) => setRegisterRetryPassword(e.target.value)}
          onKeyUp={onKeyPress}
        />
      </div>
      <div className={styles.buttons}>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_SITE_RKEY}
          onChange={setRToken}
          theme="dark"
        />
        <button onClick={register}>СОЗДАТЬ АККАУНТ</button>
        <button onClick={() => setPage("login")} className={styles.register}>
          Есть аккаунт?
        </button>
      </div>
    </div>
  );
};

export default Register;
