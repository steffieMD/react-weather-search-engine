import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast({ coordinates }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

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
    let longitude = coordinates.lon;
    let latitude = coordinates.lat;
    let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(forecastApiUrl).then(handleResponse);

    return null;
  }
}
