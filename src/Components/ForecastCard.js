const ForecastCard = ({ data }) => {
  const dayName = new Date(data.sunrise * 1000).toLocaleString("en-us", {
    weekday: "long",
  });

  return (
    <div className="forecast-card">
      <div className="forecast-card--header">
        <div className="day-condition">
          <p>{dayName}</p>
          <span>{data.weather[0].main}</span>
        </div>
      </div>
      <div className="forecast-card--body">
        <div className="forecast-details">
          <div>
            <p>Clouds</p>
            <span>{data.clouds}%</span>
          </div>
          <div>
            <p>Humidity</p>
            <span>{data.humidity}%</span>
          </div>
        </div>
        <div className="forecast-temp">
          <span>
            {data.temp.min} <sup>°</sup>
          </span>{" "}
          <span>/</span>{" "}
          <span>
            {data.temp.max} <sup>°</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
