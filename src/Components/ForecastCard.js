const ForecastCard = ({ data }) => {
  const dayName = new Date(data.sunrise_ts*1000).toLocaleString("en-us", {
    weekday: "long",
  });

  return (
    <div className="forecast-card">
      <div className="forecast-card--header">
        <div className="day-condition">
          <p>{dayName}</p>
          <span>{data.weather.description}</span>
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
            <span>{data.rh}%</span>
          </div>
        </div>
        <div className="forecast-temp">
          <span>
            {data.min_temp} <sup>°</sup>
          </span>{" "}
          <span>/</span>{" "}
          <span>
            {data.max_temp} <sup>°</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
