import React, { useState } from "react";
import "./Styles/OtherLocations.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const OtherLocations = ({addNewLocation, otherLocations}) => {

  console.log(otherLocations);

  const [newLocation, setNewLocation] = useState("");
  const [adding, setAdding] = useState(false);

  const showInput = () => {
    adding ? setAdding(false) : setAdding(true);
  }

  const addLocation = () => {
    if (newLocation == '' || newLocation == ' ') return;
    addNewLocation(newLocation);
  }

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
            />
            <button className="add-new-location-btn" onClick={addLocation}>Add</button>
          </div>
        ) : (
          <div className="information">
            <div>
              <p>Add a location</p>
              <p>
                Additional locations to track weather of your favorite places in
                the world.
              </p>
            </div>
          </div>
        )}
        <div className="add-illustration" onClick={showInput}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>

      <div className="other-locations--locations"></div>
    </div>
  );
};

export default OtherLocations;
