import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //   let day = props.date.getDay();
  //   let month = props.date.getMonth();
  //   let year = props.date.getFullYear();
  //   let minutes = props.date.getMinutes();
  //   let hours = props.date.getHours();

  return (
    <div>
      {console.log(props.date)}
      {/* <div>
        {days[day]}, {months[month]} {day} {year}{" "}
      </div>
      <div>
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes} {hours < 12 ? `AM` : `PM`}
      </div> */}
    </div>
  );
}
