
const OtherLocationCard = ({data, unit}) => {
  return (
    <div className="other-locations--locations-card" key={data.location.name}>
      <div className="other-locations--locations-card--header">
        <div className="day-condition">
          <p>{data.location.name}</p>
          <span>{data.current.condition.text}</span>
        </div>
        <div className="icon">
          <img
            src={`https:${data.current.condition.icon}`}
            alt={data.current.condition.text}
          />
        </div>
      </div>
      <div className="other-locations--locations-card--body">
        <div className="weather-details">
          <div>
            <img
              src="https://img.icons8.com/metro/26/000000/clouds.png"
              alt="clouds-icon-by-icons8"
            />{" "}
            <span>{data.current.cloud}%</span>
            <p className="tooltip">Clouds %</p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/windows/32/000000/humidity.png"
              alt="humidity-icon-by-icons8"
            />{" "}
            <span>{data.current.humidity}%</span>
            <p className="tooltip">Humidity %</p>
          </div>
        </div>
        <div className="temp">
          {unit === "metric" ? data.current.temp_c : data.current.temp_f}
          <sup>°</sup>
        </div>
      </div>
    </div>
  );
};

export default OtherLocationCard;
