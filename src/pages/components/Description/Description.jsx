import styles from "./Description.module.css";

const about =
  "AltroMon - Локальный майнкрафт проект с разными серверами. Без какого-либо доната или чего-то ещё. Создан исключительно в развлекательных целях. Полное описание плагинов и модов находится на сайте сервера.";
const mods = [
  "Список модов:",
  "Voice Chat",
  "JustEnough Items",
  "JustEnough Resources",
  "JustEnough Energistics",
  "Applied Energistics 2 (Uel)",
  "AE2 Stuff",
  "AE2 Additions",
  "Lazy AE2",
  "NAE2",
  "Extra Utils 2",
  "Industrial Craft 2",
  "Industrial Upgrade",
  "Gravitation Suite",
  "Draconic Evolution",
  "GalactiCraft",
  "Thaumcraft",
  "Alchemistry",
  "Patchouli",
  "Mekanism",
  "Mekanism Generators",
  "Thermal Foundation",
  "Thermal Expansion",
  "Thermal Dynamics",
  "Thermal Innovation",
  "Thermal Cultivation",
  "EnderIO",
  "EnderIO Endergy",
  "Immersive Engineering",
  "immersive Petroleum",
  "BuildCraft (All)",
  "Tinkers Construct",
  "OpenComputers",
  "Bonsai Trees",
  "IronChest",
  "Useful Backpacks",
  "Varied Commodities",
  "Redstone Paste",
  "Slash Blade",
  "UniDict",
];

const Description = () => {
  return (
    <div className={styles.description}>
      <div className={`${styles.block} ${styles.about}`}>Описание</div>
      <div className={styles.block}>{about}</div>
      <div className={styles.block}>
        {mods.map((mod, index) => (
          <div key={index}>{mod}</div>
        ))}
      </div>
    </div>
  );
};

export default Description;
