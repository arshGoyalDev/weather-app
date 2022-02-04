import React, { useState } from "react";
import "./Styles/OtherLocations.scss";

const OtherLocations = () => {
  const [newLocation, setNewLocation] = useState("");
  const [adding, setAdding] = useState(false);

  return (
    <div className="other-locations">
      <h4>Additional Locations</h4>
      <div className="other-locations--add-new-location">
        {adding ? (
          <div className="input">
            <input
              type="text"
              placeholder="Enter location"
              value={newLocation}
              onChange={(e) => {
                setNewLocation(e.target.value);
              }}
            />
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
        <div className="add-illustration">
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="other-locations--locations"></div>
    </div>
  );
};

export default OtherLocations;
