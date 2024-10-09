import React from "react";
import "./TimerBar.css";

function TimerBar({ progressPercentage }) {
  const isNearFull = progressPercentage >= 90;

  return (
    <div className="timer-bar">
      <div
        className={`timer-progress ${isNearFull ? "blink" : ""}`}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default TimerBar;
