import React from "react";
import "./CardHeader.css";

const CardHeader = ({ sport }) => (
  <div className="card__content-header-container">
    <div className="card__content-header-icon">
      <img
        src="https://img.icons8.com/ios/50/000000/football2.png"
        alt="sport icon"
      />
    </div>
    <div className="card__content-header">{sport}</div>
  </div>
);

export default CardHeader;
