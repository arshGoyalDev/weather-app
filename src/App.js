import React, { useState, useEffect } from "react";
import "./Components/Styles/App.scss";

import NavBar from "./Components/NavBar";
import Details from "./Components/Details";
import Progress from "./Components/Progress";
import Weather from "./Components/Weather";

function App() {
  const [currentData, updatedCurrentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);

  if (currentData.location !== undefined) {
    setTimeout(() => {
      setHide(true);
    }, 1000);
  }

  let getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchCurrentData);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  let fetchCurrentData = (position, location) => {
    if (location == undefined) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=74b6058dd8f54ec484c41910220501&q=${position.coords.latitude},${position.coords.longitude}`
      )
        .then((res) => res.json())
        .then((data) => {
          updatedCurrentData(data);
          setLoading(false);
        });
    } else {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=74b6058dd8f54ec484c41910220501&q=${location}`
      )
        .then((res) => res.json())
        .then((data) => {
          updatedCurrentData(data);
          setLoading(false);
        });
    }
  };

  return (
    <main className="App">
      <section className="main">
        <NavBar hide={hide} />
        {hide ? (
          <Weather hide={hide} currentData={currentData.current} />
        ) : (
          <Progress currentData={currentData} hide={hide} />
        )}
        <Details
          getLocation={getLocation}
          fetchCurrentData={fetchCurrentData}
          currentData={currentData}
          loading={loading}
          setLoading={setLoading}
          hide={hide}
        />
      </section>
    </main>
  );
}

export default App;
