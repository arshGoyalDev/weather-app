import React from "react";
import "./Styles/OtherDetailsMenu.scss";
import {ReactComponent as CloseIcon} from "../Assets/Images/icon-cross.svg";

const OtherDetailsMenu = ({
  hide,
  currentData,
  forecastData,
  hourlyData,
  otherDetailsMenu,
  setOtherDetailsMenu,
  unit,
  setUnit
}) => {
  console.log(currentData, forecastData, hourlyData);

  let closeOtherDetailsMenu = () => {
    setOtherDetailsMenu(false);
  }

  let changeUnitToImperial = () => {
    setUnit("imperial");    
  }
  
  let changeUnitToMetric = () => {
    setUnit("metric");
  }


  return (
    <div className={`other-details-menu ${otherDetailsMenu ? "active" : ""} ${hide ? "appear" : ""}`}>
      <div className="other-details-menu--close">
        <button className="close-btn" onClick={closeOtherDetailsMenu}>
          <CloseIcon />
        </button>
      </div>
      <div className="other-details-menu--header">
        <div className="other-details-menu--header--city-name">
          <span>Location</span> <span>{currentData.location.name}</span>
        </div>
        <div className="other-details-menu--header--unit-change">
          <button className={`celsius-btn ${unit == "imperial" ? "unselected" : ""}`} onClick={changeUnitToMetric}>
            C <sup>°</sup>
          </button>
          <button className={`fahrenheit-btn ${unit == "metric" ? "unselected" : ""}`} onClick={changeUnitToImperial}>
            F <sup>°</sup>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherDetailsMenu;
