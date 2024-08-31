import "./Styles/Error.scss";

import ErrorPic from '../assets/Images/error.png';

const Error = ({ error, setError, errorStatement }) => {
  return (
    <>
      <div
        className={`error-wrapper ${!error ? "hidden" : ""}`}
        onClick={() => {
          setError(false);
        }}
      ></div>
      <div className={`error ${!error ? "hidden" : ""}`}>
        <div className="error-svg">
          <img src={ErrorPic} alt="error illustration from undraw.co" />
        </div>
        <h1>Error</h1>
        <p>{errorStatement}</p>
        <button
          className="retry-btn"
          onClick={() => {
            setError(false);
          }}
        >
          Retry
        </button>
      </div>
    </>
  );
};

export default Error;
