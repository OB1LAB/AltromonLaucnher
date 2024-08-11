import styles from "./HeaderPlayer.module.css";
import ExitIcon from "@rsuite/icons/Exit";
const HeaderPlayer = ({ player, setIsAuth }) => {
  return (
    <div className={styles.player}>
      <img
        src={`${process.env.REACT_APP_SERVER_URL}/skins/textures/head/${player}`}
        alt={player}
        width={48}
        height={48}
      />
      <div>{player}</div>
      <button onClick={() => setIsAuth(false)}>
        <ExitIcon />
      </button>
    </div>
  );
};

export default HeaderPlayer;
