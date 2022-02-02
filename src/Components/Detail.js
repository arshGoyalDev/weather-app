import "./Styles/Detail.scss";

const Detail = ({ title, data, forecast }) => {
  console.log(data);

  return (
    <>
      <h3 className="details-title">{title}</h3>
      <div className="details-wrapper">
        {data.map((item) => (
          <div className="detail" key={item.id}>
            <span className="detail--title">{item.name}</span>

            {forecast ? (
              <span className="detail--value">
                <span>
                  {item.max} <sup>°</sup>
                </span>{" "}
                <span className="detail--value-slash">/</span>{" "}
                <span>
                  {item.min} <sup>°</sup>
                </span>
              </span>
            ) : (
              <span className="detail--value">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Detail;
