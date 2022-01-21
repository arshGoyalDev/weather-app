import React, { useState, useEffect } from "react";
import "./Components/Styles/App.scss";

import NavBar from "./Components/NavBar";
import Details from "./Components/Details";
import Progress from "./Components/Progress";

function App() {
  const [currentData, updatedCurrentData] = useState([]);
  const [loading, setLoading] = useState(false);

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
        <NavBar currentData={currentData} />
        <Progress currentData={currentData} />
        <Details
          getLocation={getLocation}
          fetchCurrentData={fetchCurrentData}
          currentData={currentData}
          loading={loading}
          setLoading={setLoading}
        />
      </section>
    </main>
  );
}

export default App;
