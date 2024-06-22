import styles from "./HeaderPlayer.module.css";
import ExitIcon from "@rsuite/icons/Exit";
const HeaderPlayer = ({ player, setIsAuth }) => {
  return (
    <div className={styles.player}>
      <img
        src={`https://skins.mcskill.net/?name=${player}&mode=5&fx=48&fy=48`}
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
