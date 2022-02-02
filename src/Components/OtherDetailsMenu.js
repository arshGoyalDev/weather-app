import React from "react";
import "./Styles/OtherDetailsMenu.scss";
import { ReactComponent as CloseIcon } from "../Assets/Images/icon-cross.svg";
import Detail from "./Detail";

const OtherDetailsMenu = ({
  currentData,
  forecastData,
  hourlyData,
  otherDetailsMenu,
  setOtherDetailsMenu,
  unit,
  setUnit,
}) => {
  console.log(forecastData);

  let forecast = [
    {
      id: 1,
      name: "",
      max: ``,
      min: ``,
    },
    {
      id: 2,
      name: "",
      max: ``,
      min: ``,
    },
    {
      id: 3,
      name: "",
      max: ``,
      min: ``,
    },
    {
      id: 4,
      name: "",
      max: ``,
      min: ``,
    },
    {
      id: 5,
      name: "",
      max: ``,
      min: ``,
    },
    {
      id: 6,
      name: "",
      max: ``,
      min: ``,
    },
    {
      id: 7,
      name: "",
      max: ``,
      min: ``,
    },
  ];

  let dayName = "";

  let changeValue = (dayName, index, max, min) => {
    forecast[index].name = dayName;
    forecast[index].max = max;
    forecast[index].min = min;
  };

  forecastData.map((day) => {
    dayName = new Date(day.dt * 1000).toLocaleString("en-us", {
      weekday: "long",
    });

    changeValue(dayName, forecastData.indexOf(day), day.temp.max, day.temp.min);
  });

  let weatherDetails = [
    {
      id: 1,
      name: "Cloud Cover",
      value: `${currentData.current.cloud}%`,
    },
    {
      id: 2,
      name: "Precipitation",
      value: `${currentData.current.precip_in} in`,
    },
    {
      id: 3,
      name: "Humidity",
      value: `${currentData.current.humidity}%`,
    },
    {
      id: 4,
      name: "Wind",
      value: `${currentData.current.wind_kph} kph`,
    },
    {
      id: 5,
      name: "Gust",
      value: `${currentData.current.gust_kph} kph`,
    },
    {
      id: 6,
      name: "Pressure",
      value: `${currentData.current.pressure_in} in`,
    },
    {
      id: 7,
      name: "Visibility",
      value: `${currentData.current.vis_km} km`,
    },
    {
      id: 8,
      name: "UV Index",
      value: `${currentData.current.uv}`,
    },
  ];

  let closeOtherDetailsMenu = () => {
    setOtherDetailsMenu(false);
  };

  let changeUnitToImperial = () => {
    setUnit("imperial");
  };

  let changeUnitToMetric = () => {
    setUnit("metric");
  };

  return (
    <div className={`other-details-menu ${otherDetailsMenu ? "active" : ""}`}>
      <div className="other-details-menu--close">
        <span>Close</span>
        <button className="close-btn" onClick={closeOtherDetailsMenu}>
          <CloseIcon />
        </button>
      </div>
      <div className="other-details-menu--header">
        <div className="other-details-menu--header--city-name">
          <span>Location</span> <span>{currentData.location.name}</span>
        </div>
        <div className="other-details-menu--header--unit-change">
          <button
            className={`celsius-btn ${unit === "imperial" ? "unselected" : ""}`}
            onClick={changeUnitToMetric}
          >
            C <sup>°</sup>
          </button>
          <button
            className={`fahrenheit-btn ${
              unit === "metric" ? "unselected" : ""
            }`}
            onClick={changeUnitToImperial}
          >
            F <sup>°</sup>
          </button>
        </div>
      </div>

      <div className="other-details-menu--weather-details">
        <Detail title={"Weather Details"} data={weatherDetails} />
      </div>

      <div className="other-details-menu--forecast">
        <Detail title={"Weather Forecast"} data={forecast} forecast={true} />
      </div>
    </div>
  );
};

export default OtherDetailsMenu;

{
  /* <a href="https://icons8.com/icon/uEV36IijHymM/weather">Weather icon by Icons8</a> */
}
