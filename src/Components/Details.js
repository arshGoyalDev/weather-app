import React, { useState } from "react";
import "./Styles/Details.scss";

const Details = ({ getLocation, fetchCurrentData }) => {
  const [visibility, setVisibility] = useState(false);
  const [location, updateLocation] = useState("");

  let clickHandler = (e) => {
    if (e.target.classList.contains('track-btn')) {
      getLocation();
    }
    visibility ? setVisibility(false) : setVisibility(true);
  };

  let changeHandler = (e) => {
    updateLocation(e.target.value);
  };

  let keyDownHandler = (e) => {
    if (e.keyCode == 13) {
      fetchCurrentData("", location);
    }
    setVisibility(false);
  };

  return (
    <div className="details">
      <div className="details--time">
        <span>18.35 AM</span> - <span>Wednesday, 19 Jan 2022</span>
      </div>

      <div className="details--location">
        <span className="location">Location</span>
        <button className="change-btn" onClick={clickHandler}>
          Change
        </button>
        <div className={`details--location-change ${visibility ? "show" : ""}`}>
          <button className="track-btn" onClick={clickHandler}>
            Track
          </button>
          <span>Or</span>
          <input
            type="text"
            name="location"
            className="location-input"
            value={location}
            placeholder="Enter location"
            onChange={changeHandler}
            onKeyDown={keyDownHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
