import "./App.css";
import DayList from "./components/dayList";
import { gifts } from "./components/mocks/days";

function App() {
  return (
    <div className="App">
      <h1>Advent Calendar</h1>
      <DayList gifts={gifts} />
    </div>
  );
}

export default App;
