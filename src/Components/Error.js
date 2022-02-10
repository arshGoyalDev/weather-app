import "./Styles/Error.scss";
import ErrorSvg from "../Assets/Images/undraw_location_search_re_ttoj.svg";

const Error = ({ error, setError, errorStatement }) => {
  return (
    <div
      className={`error-wrapper ${!error && "hidden"}`}
      onClick={() => {
        setError(false);
      }}
    >
      <div className="error">
        <div className="error-svg">
          <img src={ErrorSvg} alt="error illustration from undraw.co" />
        </div>
        <h1>Error</h1>
        <p>{errorStatement}</p>
        <button className="retry-btn">Retry</button>
      </div>
    </div>
  );
};

export default Error;
