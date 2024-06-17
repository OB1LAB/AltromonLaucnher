import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import MinusIcon from "@rsuite/icons/Minus";
import PlusIcon from "@rsuite/icons/legacy/Plus";
import styles from "./HeaderButtons.module.css";
const HeaderButtons = () => {
  return (
    <div className={styles.buttons}>
      <button>
        <GearCircleIcon />
      </button>
      <button className={styles.minus}>
        <MinusIcon />
      </button>
      <button className={styles.close}>
        <PlusIcon />
      </button>
    </div>
  );
};

export default HeaderButtons;
