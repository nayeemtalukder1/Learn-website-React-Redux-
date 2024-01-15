import styles from "./ButtonContainer.module.css";

function ButtonConatainer() {
  const buttonName = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonName.map((buttonName) => {
        <button className={styles.button}>{buttonName}</button>;
      })}
    </div>
  );
}

export default ButtonConatainer;
