import React from "react";
import FormattedDate from "./FormattedDate";

export default function info(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.info.icon}@2x.png`;

  const showFahrenheit = (event) => {
    event.preventDefault();
    toFahrenheit(props.info.temperature);
  };

  const toFahrenheit = (celsius) => {
    return celsius * (9 / 5) + 32;
  };

  const showCelsius = (event) => {
    event.preventDefault();
    toCelsius(props.info.temperature);
  };

  const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  return (
    <div className="WeatherInfo">
      <h1>
        {props.info.location} {props.info.country}
      </h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>

      <div className="row">
        <div className="col-8 d-flex">
          <div className="d-flex justify-content-center align-items-center">
            {props.info.icon ? (
              <img src={iconUrl} className="img-fluid" alt="weather icon" />
            ) : (
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                className="img-fluid"
                alt="weather icon"
              />
            )}
          </div>
          {props.info.temperature ? (
            <span className="temperature ">
              {Math.round(props.info.temperature)}
            </span>
          ) : (
            <span className="temperature ">36</span>
          )}
          <span className="unit ">
            {" "}
            <a href="/" onClick={showCelsius} on="true">
              °C
            </a>
          </span>
          <span className="unit">
            <a href="/" onClick={showFahrenheit} on="true">
              °F
            </a>
          </span>
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitaion: 15%</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
