import React from "react";
import "./TimerBar.css";

function TimerBar({ progressPercentage }) {
  const isBlinking = progressPercentage >= 90; // Umbral del 90%

  return (
    <div className="timer-bar">
      <div
        className={`timer-progress ${isBlinking ? 'blink' : ''}`}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default TimerBar;