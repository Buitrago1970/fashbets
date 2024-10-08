import React, { useState } from "react";
import "./ActionButtons.css";

function ActionButtons({ swipeCard, acceptedBetsCount, handleHistoryClick }) {
  const [isAnimating, setIsAnimating] = useState({
    reject: false,
    approve: false,
    history: false,
  });

  const handleButtonClick = (action, buttonType) => {
    setIsAnimating((prev) => ({ ...prev, [buttonType]: true }));
    swipeCard(action);
    setTimeout(() => setIsAnimating((prev) => ({ ...prev, [buttonType]: false })), 200); // Duration of the animation
  };

  return (
    <div className="buttons-container">
      <button
        className={`action-button reject-button ${isAnimating.reject ? "button-press-animation" : ""}`}
        onClick={() => handleButtonClick("left", "reject")}
      >
        X
      </button>
      <button
        className={`action-button approve-button ${isAnimating.approve ? "button-press-animation" : ""}`}
        onClick={() => handleButtonClick("right", "approve")}
      >
        ✔
      </button>
      <button
        className={`history-button ${isAnimating.history ? "button-press-animation" : ""}`}
        onClick={() => handleHistoryClick(null, "history")}
      >
        <div className="history-button-content">
          <div className="history-button-icon">
            <svg
              xmlns="
http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_2089_16)">
                <path
                  d="M8 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H11.697"
                  stroke="#002361"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M18 14V18H22" stroke="#002361" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M18 11V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5H14"
                  stroke="#002361"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H12C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C14 5.53043 13.7893 6.03914 13.4142 6.41421C13.0391 6.78929 12.5304 7 12 7H10C9.46957 7 8.96086 6.78929 8.58579 6.41421C8.21071 6.03914 8 5.53043 8 5Z"
                  stroke="#002361"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 18C14 19.0609 14.4214 20.0783 15.1716 20.8284C15.9217 21.5786 16.9391 22 18 22C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18C22 16.9391 21.5786 15.9217 20.8284 15.1716C20.0783 14.4214 19.0609 14 18 14C16.9391 14 15.9217 14.4214 15.1716 15.1716C14.4214 15.9217 14 16.9391 14 18Z"
                  stroke="#002361"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M8 11H12" stroke="#002361" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 15H11" stroke="#002361" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_2089_16">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="history-button-count">{acceptedBetsCount}</div>
        </div>
      </button>
    </div>
  );
}

export default ActionButtons;
