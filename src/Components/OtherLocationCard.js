
const OtherLocationCard = ({data, unit}) => {
  return (
    <div className="other-locations--locations-card" key={data.location.name}>
      <div className="other-locations--locations-card--header">
        <div className="day-condition">
          <p>{data.location.name}</p>
          <span>{data.current.condition.text}</span>
        </div>
      </div>
      <div className="other-locations--locations-card--body">
        <div className="weather-details">
          <div>
            <p>Clouds</p>
            <span>{data.current.cloud}%</span>
          </div>
          <div>
            <p>Humidity</p>
            <span>{data.current.humidity}%</span>
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
