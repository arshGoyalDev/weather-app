import React, { useState } from "react";
import "./Styles/Weather.scss";

const Weather = ({ hide, currentData }) => {
  console.log(currentData);

  let [visible, setVisible] = useState(false);

  if (hide) {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }

  return (
    <div className={`weather ${visible ? "appear" : ""}`}>
      <div className="weather--digit">
        {currentData.temp_c} <sup>°</sup>
      </div>

      <div className="weather--quotes">
        <p>{currentData.condition.text}</p>
        <p>Feels like: {currentData.feelslike_c}</p>
      </div>
    </div>
  );
};

export default Weather;
