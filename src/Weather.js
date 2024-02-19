import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="border container Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter City..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <h1>New York, NY, USA</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-8 d-flex">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather-icon"
              className="img-fluid"
            />
          </div>
          <span className="temperature ">6</span>
          <span className="unit ">°C</span>
          <span className="unit">°F</span>
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitaion: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
