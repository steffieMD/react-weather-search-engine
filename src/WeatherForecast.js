import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  const loadForecast = useCallback(() => {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "63214c4281922e3bb72fdf12dada7734";
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(forecastApiUrl).then(handleResponse);
  }, [props.coordinates.lat, props.coordinates.lon] )

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates])
  

  const handleResponse = (response) => {
    setForecast(response.data.daily);
    setLoaded(true);
  };


  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    loadForecast()

    return null;
  }
}
