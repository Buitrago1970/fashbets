import React from "react";
import "./TimerBar.css";

function TimerBar({ progressPercentage }) {
  return (
    <div className="timer-bar">
      <div
        className="timer-progress"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default TimerBar;
