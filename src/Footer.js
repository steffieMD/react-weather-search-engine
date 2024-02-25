import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <p className="footer">
      This project was coded by{" "}
      <a href="/" target="blank">
        Steff Metieh
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/steffieMD/react-weather-search-engine"
        target="blank"
      >
        open-sourced on GitHub
      </a>{" "}
      and hosted on{" "}
      <a href="/" target="blank">
        Netlify
      </a>
    </p>
  );
}
