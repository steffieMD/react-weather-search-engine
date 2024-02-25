import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <p className="footer">
      This project was coded by{" "}
      <a href="https://github.com/steffieMD" target="blank">
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
      <a
        href="https://weather-search-engine-react-practice.netlify.app/"
        target="blank"
      >
        Netlify
      </a>
    </p>
  );
}
