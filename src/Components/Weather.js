import React, { useState } from "react";
import "./Styles/Weather.scss";

const Weather = ({ visible, currentData }) => {
  let [quotesVisible, setQuotesVisible] = useState(false);

  if (visible) {
    setTimeout(() => {
      setQuotesVisible(true);
    }, 500);
  }

  return (
    <div className={`weather ${visible ? "appear" : ""}`}>
      <div className={`weather--digit ${visible ? "appear" : ""}`}>
        {currentData.temp_c} <sup>°</sup>
      </div>

      <div className="weather--quotes">
        <p className={quotesVisible ? "appear" : ""}>
          {currentData.condition.text}
        </p>
        <p className={quotesVisible ? "appear" : ""}>
          Feels like: {currentData.feelslike_c}
        </p>
      </div>
    </div>
  );
};

export default Weather;
