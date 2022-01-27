import React, { useState, useEffect } from "react";
import "./Components/Styles/App.scss";

import NavBar from "./Components/NavBar";
import Details from "./Components/Details";
import Progress from "./Components/Progress";
import Weather from "./Components/Weather";
import OtherDetailsMenu from "./Components/OtherDetailsMenu";

let App = () => {
  const [currentData, setCurrentData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState(false);
  const [conditionText, setConditionText] = useState("");
  const [condition, setCondition] = useState("");
  const [unit, setUnit] = useState("metric");

  // hide = true if location is not undefined
  if (currentData.location !== undefined) {
    setTimeout(() => {
      setHide(true);
    }, 1000);
  }

  // visible = true after 1s when hide == true
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

  // fetch current weather data for the given location
  let fetchCurrentData = async (position, location) => {
    const response = await fetch(
      location === undefined
        ? `https://api.weatherapi.com/v1/forecast.json?key=74b6058dd8f54ec484c41910220501&q=${position.coords.latitude},${position.coords.longitude}`
        : `https://api.weatherapi.com/v1/forecast.json?key=74b6058dd8f54ec484c41910220501&q=${location}`
    );
    const data = await response.json();
    setCurrentData(data);

    let current = new Date(data.current.last_updated).getHours();
    setHourlyData(
      data.forecast.forecastday[0].hour.slice(current - 2, current + 3)
    );

    setLoading(false);
  };

  useEffect(async () => {
    if (currentData.current !== undefined) {
      const response = await fetch(
        unit === "metric"
          ? `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.location.lat}&lon=${currentData.location.lon}&exclude=minutely,hourly&units=metric&APPID=0db0675efd35ddf44c1152891c5e1ce2`
          : `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.location.lat}&lon=${currentData.location.lon}&exclude=minutely,hourly&units=imperial&APPID=0db0675efd35ddf44c1152891c5e1ce2`
      );
      const data = await response.json();
      setForecastData(data.daily.slice(1, 8));
    }
  }, [currentData]);

  // set condition text based on current data
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
  }, [currentData, conditionText]);

  return (
    <main className="App">
      <section
        className={`main ${visible ? condition : ""} ${hide ? "active" : ""}`}
      >
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
      {hide ? (
        <OtherDetailsMenu
          currentData={currentData}
          forecastData={forecastData}
          hourlyData={hourlyData}
        />
      ) : (
        ""
      )}
    </main>
  );
};

export default App;
