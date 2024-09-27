// TeamsInfo.js
import React from "react";

function TeamsInfo({ teams, time, betFor }) {
  return (
    <div className="teams-info">
      <div className="teams-info__teams">
        {teams.map((team, index) => (
          <div
            key={index}
            className={`teams-info__team ${
              team.name === betFor ? "teams-info__team--highlight" : ""
            }`}
          >
            <img
              className="teams-info__team-image"
              src={team.image}
              alt={`${team.name} logo`}
            />
            <div className="teams-info__team-name">{team.name}</div>
            <div className="teams-info__team-score">{team.score}</div>
          </div>
        ))}
      </div>
      <div className="teams-info__time">Minutos: {time}</div>
    </div>
  );
}

export default TeamsInfo;
