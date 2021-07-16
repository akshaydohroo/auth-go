import React from "react";
import styles from "./UnderLineInput.module.css";
function UnderLineInput(props) {
  const {
    type = "text",
    label = "input",
    child,
    value,
    setValue,
    name = "input",
  } = props;
  return (
    <div className={styles["input-wrapper"]}>
      <input
        value={value}
        name={name}
        type={type}
        className={styles["input"]}
        onChange={setValue}
      ></input>
      <label className={styles["input-label"]}>{label}</label>
      {child && child}
    </div>
  );
}

export default UnderLineInput;
