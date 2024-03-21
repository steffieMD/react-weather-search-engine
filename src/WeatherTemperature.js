import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("metric");

  const showFahrenheit = (event) => {
    event.preventDefault();
    setUnit("imperial");
  };

  const showCelsius = (event) => {
    event.preventDefault();
    setUnit("metric");
  };

  const convertToFahrenheit = () => {
    return props.celsius * (9 / 5) + 32;
  };

  if (unit === "metric") {
    return (
      <>
        <span className="temperature">{Math.round(props.celsius)}</span>

        <span className="unit ">
          {" "}
          <a href="/" onClick={showCelsius} on="true">
            °C
          </a>{" "}
          |
          <a href="/" onClick={showFahrenheit} on="true">
            °F
          </a>
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="temperature ">
          {Math.round(convertToFahrenheit())}
        </span>

        <span className="unit ">
          {" "}
          <a href="/" onClick={showFahrenheit} on="true">
            °F
          </a>{" "}
          |{" "}
          <a href="/" onClick={showCelsius} on="true">
            °C
          </a>
        </span>
      </>
    );
  }
}
