import React from "react";
import "./ActionButtons.css";

function ActionButtons({ swipeCard, acceptedBetsCount, handleHistoryClick }) {
  return (
    <div className="buttons-container">
      <button className="action-button reject-button" onClick={() => swipeCard("left")}>
        X
      </button>
      <button className="action-button approve-button" onClick={() => swipeCard("right")}>
        ✔
      </button>
      <button className="history-button" onClick={handleHistoryClick}>
  <div className="history-button-content">
    <div className="history-button-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
        <path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
      </svg>
    </div>
    <div className="history-button-count">
      {acceptedBetsCount}
    </div>
  </div>
</button>
    </div>
  );
}

export default ActionButtons;
