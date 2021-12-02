//import logo from "./logo.svg";
import "./App.css";
//import axios from "axios";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div>
        <h1> Weather App </h1>
        <SearchForm />
      </div>
      <div className="Link">
        <a
          href="https://github.com/natkilima/weatherreact"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code by Nathalie Rognon
        </a>
      </div>
    </div>
  );
}

export default App;
