import React from "react";
import "./rocketList.css";

const Rockets = ({ mission }) => {
  return (
    <div className="card-item">
      {/* <img src={rocket?.flicker_images[0]} className="item-1" width="120" alt="firstItem" /> */}
      <div
        className="item-content"
        style={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}
      >
        <h3>{mission?.mission_name}</h3>
        <span className="item-para">{mission?.description}</span>
      </div>
    </div>
  );
};

export default Rockets;
