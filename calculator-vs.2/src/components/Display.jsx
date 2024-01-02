import styles from "./Display.module.css";
function Display({ displayValue }) {
  return (
    <input
      type="text"
      classNameName={styles.display}
      readonly
      Value={displayValue}
    ></input>
  );
}

export default Display;
