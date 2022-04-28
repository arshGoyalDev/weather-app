import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import OtherLocationCard from "./OtherLocationCard";

const OtherLocations = ({ addNewLocation, otherLocations, unit }) => {
  const [newLocation, setNewLocation] = useState("");
  const [adding, setAdding] = useState(false);

  const showInput = () => {
    adding ? setAdding(false) : setAdding(true);
  };

  const addLocation = () => {
    if (newLocation === "" || newLocation === " ") return;
    addNewLocation(newLocation);
    setNewLocation("");
    setAdding(false);
  };

  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      addLocation();
    }
  };

  return (
    <div className="other-locations">
      <h4>Other Locations</h4>
      <div className="other-locations--add-new-location">
        {adding ? (
          <div className="add-location-input">
            <input
              type="text"
              placeholder="Enter location"
              value={newLocation}
              onChange={(e) => {
                setNewLocation(e.target.value);
              }}
              onKeyDown={keyDownHandler}
            />
            <button className="add-new-location-btn" onClick={addLocation}>
              Add
            </button>
          </div>
        ) : (
          <div className="information">
            <div>
              <p>Add a location</p>
              <p>
                Other locations to track weather of your favorite places in the
                world.
              </p>
            </div>
          </div>
        )}
        <div className="add-illustration" onClick={showInput}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>

      <div className="other-locations--locations">
        {otherLocations.length !== 0 &&
          otherLocations.map((locationData) => (
            <OtherLocationCard data={locationData} unit={unit} />
          ))}
      </div>
    </div>
  );
};

export default OtherLocations;
