import styles from "./Login.module.css";
const { ipcRenderer } = window.require("electron");
const Login = ({ setPage, setIsAuth, setPlayer, player }) => {
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsAuth(true);
      ipcRenderer.send("launcher-setPlayer", player);
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
        <input placeholder="пароль" type="password" onKeyUp={onKeyPress} />
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            setIsAuth(true);
            ipcRenderer.send("launcher-setPlayer", player);
          }}
        >
          ВОЙТИ
        </button>
        <button onClick={() => setPage("register")} className={styles.register}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default Login;
