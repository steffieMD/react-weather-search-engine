import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function info(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.info.icon}@2x.png`;

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
          <WeatherIcon iconUrl={iconUrl} alt={props.info.description} />
          <WeatherTemperature celsius={props.info.temperature} />
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
