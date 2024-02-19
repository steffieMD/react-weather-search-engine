import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";

  let [weatherData, setWeatherData] = useState({ ready: false });

  let [city, setCity] = useState("");

  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let iconUrl = `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

  const getInput = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchData = (response) => {
      setWeatherData({
        location: response.data.name,
        country: response.data.sys.country,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        date: "Wednesday 07:00",
      });
    };

    axios.get(apiURL).then(searchData);
  };

  const showFahrenheit = (event) => {
    event.preventDefault();
    setWeatherData(toFahrenheit(weatherData.temperature));
  };

  const toFahrenheit = (celsius) => {
    return celsius * (9 / 5) + 32;
  };

  const showCelsius = (event) => {
    event.preventDefault();
    setWeatherData(toCelsius(weatherData.temperature));
  };

  const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  return (
    <div className="border container Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter City..."
              className="form-control"
              autoFocus="on"
              onChange={getInput}
            />
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <h1>
        {weatherData.location} {weatherData.country}
      </h1>
      <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>

      <div className="row">
        <div className="col-8 d-flex">
          <div className="d-flex justify-content-center align-items-center">
            {weatherData.icon ? (
              <img src={iconUrl} className="img-fluid" alt="weather icon" />
            ) : (
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                className="img-fluid"
                alt="weather icon"
              />
            )}
          </div>
          {weatherData.temperature ? (
            <span className="temperature ">
              {Math.round(weatherData.temperature)}
            </span>
          ) : (
            <span className="temperature ">36</span>
          )}
          <span className="unit ">
            {" "}
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </span>
          <span className="unit">
            <a href="/" onClick={showFahrenheit} on>
              °F
            </a>
          </span>
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitaion: 15%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
