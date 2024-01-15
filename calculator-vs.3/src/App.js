import { useState } from "react";
import styles from "./App.module.css";
import ButtonConatainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  console.log(calVal);
  const onButtonClick = (buttonText) => {
    if (buttonText == "c") {
      setCalVal("");
    } else if (buttonText == "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonConatainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
