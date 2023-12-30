import "./App.css";
import ClockHeadin from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeadin />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
