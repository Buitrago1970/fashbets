import React from "react";
import "./ActionButtons.css";

function ActionButtons({ swipeCard, acceptedBetsCount, handleHistoryClick }) {
  return (
    <div className="buttons-container">
      <button
        className="action-button reject-button"
        onClick={() => swipeCard("left")}
      >
        X
      </button>
      <button
        className="action-button approve-button"
        onClick={() => swipeCard("right")}
      >
        ✔
      </button>
      <button className="history-button" onClick={handleHistoryClick}>
        {acceptedBetsCount}
      </button>
    </div>
  );
}

export default ActionButtons;
