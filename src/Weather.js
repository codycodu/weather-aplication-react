import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  if (weatherData.ready) {
    return (
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <form class="search-form" id="search-form">
              <div class="row">
                <div class="col-sm">
                  <input
                    id="location"
                    type="search"
                    placeholder="Enter a city"
                  />
                </div>
                <div class="col-sm">
                  <input id="searchButton" type="submit" value="Search"></input>
                </div>
                <div class="col-sm">
                  <input
                    id="current-location-btn"
                    type="submit"
                    value="Current Location"
                  ></input>
                </div>
              </div>
            </form>
            <div class="overview">
              <h1 id="city">{weatherData.city}</h1>
              <ul>
                <li>
                  <span id="date">{weatherData.date}</span>
                </li>
                <li id="description">{weatherData.description}</li>
              </ul>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="d-flex weather-temperature">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    id="icon"
                  />
                  <span>
                    <strong id="temperature">
                      {Math.round(weatherData.temperature)}
                    </strong>
                  </span>
                  <span class="units">°C</span>
                </div>
              </div>
              <div class="col-4">
                <ul class="extras">
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{weatherData.wind}</span>m/h
                  </li>
                </ul>
              </div>
            </div>
            <div class="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "61554ff85a7ce7b893c67a9ea08292ca";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
