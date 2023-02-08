import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./Components/BookList";
import fantasy from "./json/fantasy.json";
/* import romance from "../json/romance.json";
import horror from "../json/horror.json";
import history from "../json/history.json";
import fantasy from "../json/fantasy.json"; */
function App() {
  return (
    <div>
      <BookList props={fantasy} />
    </div>
  );
}

export default App;
