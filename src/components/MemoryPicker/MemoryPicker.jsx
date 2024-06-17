import { useState } from "react";
import styles from "./MemoryPicker.module.css";
import { Slider } from "rsuite";

const MemoryPicker = () => {
  const [memory, setMemory] = useState(4);
  return (
    <Slider
      className={styles.picker}
      value={memory}
      onChange={setMemory}
      step={1}
      graduated
      progress
      min={1}
      max={6}
      renderMark={(mark) => {
        if ([1, 2, 3, 4, 5, 6].includes(mark)) {
          return <span>{mark} GB</span>;
        }
        return null;
      }}
    />
  );
};

export default MemoryPicker;
