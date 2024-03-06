import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  //   let [loaded, setLoaded] = useState(false);
  const handleResponse = (response) => {
    // let dailyForecast = response.data.daily;
    // console.log(dailyForecast);
  };

  let lat = props.lat;
  let lon = props.long;
  let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
  let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(forecastApiUrl).then(handleResponse);

  //   if (loaded) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon iconUrl="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          <span className="WeatherForecast-temperature-max">34</span>
          <span className="WeatherForecast-temperature-min">24</span>
        </div>
      </div>
    </div>
  );
  // } else {
  //   let lat = props.lat;
  //   let lon = props.long;
  //   let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
  //   let apiUrl = `https://api.openweathermap.org/
  //       data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  //   axios.get(apiUrl).then(handleResponse);
  //     return <>Loading....</>;
  //   }
}
