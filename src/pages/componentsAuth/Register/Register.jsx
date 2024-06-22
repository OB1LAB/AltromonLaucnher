import styles from "./Register.module.css";
const Register = ({ setPage }) => {
  return (
    <div className={styles.login}>
      <div className={styles.authText}>Регистрация</div>
      <div className={styles.forms}>
        <input placeholder="логин" />
        <input type="password" placeholder="пароль" />
        <input type="password" placeholder="повтор пароля" />
      </div>
      <div className={styles.buttons}>
        <button>СОЗДАТЬ АККАУНТ</button>
        <button onClick={() => setPage("login")} className={styles.register}>
          Есть аккаунт?
        </button>
      </div>
    </div>
  );
};

export default Register;
