import React, { useState } from "react";
import "./Styles/Weather.scss";

const Weather = ({ hide, currentData }) => {
  let [visible, setVisible] = useState(false);

  if (hide) {
    setTimeout(() => {
      setVisible(true);
    }, 1000)
  }

  return (
    <div className={`weather ${visible ? "appear" : ""}`}>
      <div className="weather--digit">
        {currentData.temp_c} <sup>°</sup>
      </div>

      <div className="weather--quotes">
        <p>{currentData.condition.text}</p>
      </div>
    </div>
  );
};

export default Weather;