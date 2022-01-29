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
  const [locationChangeVisibility, setLocationChangeVisibility] =
    useState(false);
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
  let changeLocation = (e) => {
    loading ? setLoading(false) : setLoading(true);
    locationChangeVisibility
      ? setLocationChangeVisibility(false)
      : setLocationChangeVisibility(true);
  };

  let trackLocation = () => {
    getLocation();
    // setLoading(false);
    setLocationChangeVisibility(false);
  };

  // update the location when the value changes
  let changeHandler = (e) => {
    updateLocation(e.target.value);
  };

  // press enter to fetch current data
  let keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      fetchCurrentData("", location);
      setLocationChangeVisibility(false);
    }
  };

  return (
    <div className="details">
      <div className={`details--time ${hide ? "animate-left" : ""}`}>
        {visible ? (
          <>
            <span>{currentData.location.localtime.substring(11, 16)}</span>{" "}
            <span className="dash"></span>{" "}
            <span>
              {date.toLocaleDateString("en-US", { weekday: "long" })},{" "}
              {date.getDate()}{" "}
              {date.toLocaleString("default", { month: "short" })}{" "}
              {date.getFullYear()}
            </span>
          </>
        ) : (
          <>
            <span>{currentDate.toTimeString().substring(0, 5)}</span>{" "}
            <span className="dash"></span>{" "}
            <span>
              {currentDate.toLocaleDateString("en-US", { weekday: "long" })},{" "}
              {currentDate.getDate()}{" "}
              {currentDate.toLocaleString("default", { month: "short" })}{" "}
              {currentDate.getFullYear()}
            </span>
          </>
        )}
      </div>

      <div className={`details--location ${hide ? "animate-right" : ""}`}>
        <span className="location">
          {visible
            ? `${currentData.location.name}, ${currentData.location.country}`
            : "Location"}
        </span>
        <button className="change-btn" onClick={changeLocation}>
          {loading ? (
            <div className="loader">
              <span className="dot dot-one"></span>
              <span className="dot dot-two"></span>
              <span className="dot dot-third"></span>
            </div>
          ) : (
            "change"
          )}
        </button>
        <div
          className={`details--location-change ${
            locationChangeVisibility ? "show" : ""
          }`}
        >
          <button className="track-btn" onClick={trackLocation}>
            track
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
