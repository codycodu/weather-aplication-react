import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Weather App</h1>
        <Weather />
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
    </div>
  );
}

export default App;
