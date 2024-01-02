import styles from "./App.module.css";
import ButtonConatainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonConatainer></ButtonConatainer>
      </div>
    </>
  );
}

export default App;
