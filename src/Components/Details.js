import React, { useState } from "react";
import "./Styles/Details.scss";

const Details = ({
  getLocation,
  fetchCurrentData,
  currentData,
  loading,
  setLoading,
  hide,
  visible,
}) => {
  const [visibility, setVisibility] = useState(false);
  const [location, updateLocation] = useState("");

  // get current date and time
  let parts = (
    currentData.location !== undefined
      ? currentData.location.localtime.substring(0, 10)
      : ""
  ).split("-");
  let currentDate = new Date();
  let date = new Date(parts[0], parts[1] - 1, parts[2]);

  // handler for clicks on track btn
  let clickHandler = (e) => {
    if (e.target.classList.contains("track-btn")) {
      getLocation();
    }
    setLoading(true);
    visibility ? setVisibility(false) : setVisibility(true);
  };

  // update the location when the value changes
  let changeHandler = (e) => {
    updateLocation(e.target.value);
  };

  // press enter to fetch current data
  let keyDownHandler = (e) => {
    if (e.keyCode == 13) {
      fetchCurrentData("", location);
      setVisibility(false);
    }
  };

  return (
    <div className="details">
      <div className={`details--time ${hide ? "animate" : ""}`}>
        {visible ? (
          <div>
            <span>{currentData.location.localtime.substring(11, 16)}</span>{" "}
            <span className="dash"></span>{" "}
            <span>
              {date.toLocaleDateString("en-US", { weekday: "long" })},{" "}
              {date.getDate()}{" "}
              {date.toLocaleString("default", { month: "short" })}{" "}
              {date.getFullYear()}
            </span>
          </div>
        ) : (
          <div>
            <span>{currentDate.toTimeString().substring(0, 5)}</span>{" "}
            <span className="dash"></span>{" "}
            <span>
              {currentDate.toLocaleDateString("en-US", { weekday: "long" })},{" "}
              {currentDate.getDate()}{" "}
              {currentDate.toLocaleString("default", { month: "short" })}{" "}
              {currentDate.getFullYear()}
            </span>
          </div>
        )}
      </div>

      <div className={`details--location ${hide ? "animate" : ""}`}>
        <span className="location">
          {visible
            ? `${currentData.location.name}, ${currentData.location.country}`
            : "Location"}
        </span>
        <button className="change-btn" onClick={clickHandler}>
          {loading ? <div className="loader"></div> : "Change"}
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
