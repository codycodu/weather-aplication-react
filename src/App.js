import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by {""}
        <a
          href="https://www.codruta-blaga.com/"
          target="_blank"
          rel="noreferrer"
        >
          Codruta Blaga {""}
        </a>
        and is {""}
        <a
          href="https://github.com/codycodu/weather-aplication-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
  );
}

export default App;
