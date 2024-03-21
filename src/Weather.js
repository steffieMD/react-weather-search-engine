import React, { useEffect, useState, useCallback } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

import { InfinitySpin } from "react-loader-spinner";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  let [city, setCity] = useState(props.defaultCity);

  const search = useCallback(() => {
    const apiKey = "63214c4281922e3bb72fdf12dada7734";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }, [city]);

  useEffect(() => {
    if (!weatherData.ready) {
      search();
    }
  }, [search, weatherData.ready]);

  const handleResponse = (response) => {
    setWeatherData({
      ready: true,
      coords: response.data.coord,
      location: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const getInput = (event) => {
    setCity(event.target.value);
  };

  if (weatherData.ready) {
    return (
      <div className="border container Weather">
        <form onSubmit={handleSubmit} id="search">
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
        <WeatherInfo info={weatherData} />
        <WeatherForecast coordinates={weatherData.coords} />
      </div>
    );
  } else {
    search();
    return (
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    );
  }
}
