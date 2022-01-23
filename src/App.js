import React, { useState, useEffect } from "react";
import "./Components/Styles/App.scss";

import NavBar from "./Components/NavBar";
import Details from "./Components/Details";
import Progress from "./Components/Progress";
import Weather from "./Components/Weather";
import OtherDetailsMenu from "./Components/OtherDetailsMenu";

function App() {
  const [currentData, updatedCurrentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState(false);
  const [conditionText, setConditionText] = useState("");
  const [condition, setCondition] = useState("");

  if (currentData.location !== undefined) {
    setTimeout(() => {
      setHide(true);
    }, 1000);
  }

  if (hide) {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }

  // get current location from navigator geolocation
  let getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchCurrentData);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // helper function to fetch current data
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

  useEffect(() => {
    if (currentData.current !== undefined) {
      setConditionText(currentData.current.condition.text);
    }

    if (conditionText.includes("Sunny")) {
      setCondition("sunny");
    }
    if (conditionText.includes("Clear")) {
      setCondition("clear");
    }
    if (conditionText.includes("cloudy") || conditionText.includes("Cloudy")) {
      setCondition("cloudy");
    }
    if (conditionText.includes("Overcast")) {
      setCondition("overcast");
    }
    if (conditionText.includes("Mist")) {
      setCondition("mist");
    }
    if (conditionText.includes("fog") || conditionText.includes("Fog")) {
      setCondition("fog");
    }
    if (conditionText.includes("rain")) {
      setCondition("rain");
    }
    if (conditionText.includes("drizzle")) {
      setCondition("drizzle");
    }
    if (
      conditionText.includes("snow") ||
      conditionText.includes("Ice") ||
      conditionText.includes("ice")
    ) {
      setCondition("snow");
    }
    if (
      conditionText.includes("thunder") ||
      conditionText.includes("Thundery")
    ) {
      setCondition("thunder");
    }
    if (conditionText.includes("sleet")) {
      setCondition("sleet");
    }
    if (conditionText.includes("Blizzard")) {
      setCondition("blizzard");
    }
  }, [currentData, conditionText, condition]);

  return (
    <main className="App">
      <section className={`main ${visible ? condition : ""}`}>
        <NavBar hide={hide} />
        {hide ? (
          <Weather visible={visible} currentData={currentData.current} />
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
          visible={visible}
        />
      </section>
      <OtherDetailsMenu />
    </main>
  );
}

export default App;
