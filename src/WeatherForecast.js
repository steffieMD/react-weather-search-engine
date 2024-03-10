import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(coordinates) {
  const [forecast, setForecast] = useState({ loaded: false });

  const handleResponse = (response) => {
    console.log(response.data);

    setForecast({
      loaded: true,
    });
  };

  let longitude = coordinates.lon;
  let latitude = coordinates.lat;
  let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
  let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    axios
      .get(forecastApiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  if (forecast.loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon iconUrl="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
            <div className="WeatherForecast-Temperatures">
              <span className="WeatherForecast-temperature-max">34°</span>
              <span className="WeatherForecast-temperature-min">24°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <>Loading</>;
  }
}
