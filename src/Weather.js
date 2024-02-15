import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="border container">
      <form>
        <input type="search" placeholder="Enter City..." />
        <input type="submit" />
      </form>
      <h1>New York, NY, USA</h1>
      <h5>Wednesday 07:00</h5>
      <h5>Mostly Cloudy</h5>
      <div className="row">
        <div className="col-7">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-icon"
          />
          <p>
            6<span>°C</span>
            <span>°F</span>
          </p>
        </div>
        <div className="col-5">
          <ul>
            <li>Precipitaion: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>

          <div>
            <button>Temperature</button> <button>Precipitation</button>
            <button>Wind</button>
          </div>
        </div>
      </div>
    </div>
  );
}
