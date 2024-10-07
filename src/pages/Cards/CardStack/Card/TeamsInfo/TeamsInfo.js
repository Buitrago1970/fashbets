import React from "react";
import "./TeamsInfo.css";

function TeamsInfo({ bet, odds, mainImage, date, teams, price }) {
  return (
    <div className="card__content-teams-info">
      <div className="card__content-teams-info-bet">{bet}</div>
      <div className="card__content-teams-info-odds">{odds}X</div>
      <div className="card__content-teams-info-main-image">
        <img src={mainImage} alt="main team" />
      </div>
      <div className="card__content-teams-info-date">{date}</div>
      <div className="card__content-teams-info-teams">
        <div className="card__content-teams-info-teams-team">
          <img src={teams[0].image} alt={teams[0].name} />
          <div>{teams[0].name}</div>
        </div>
        <div className="card__content-teams-info-teams-team">
          <img src={teams[1].image} alt={teams[1].name} />
          <div>{teams[1].name}</div>
        </div>
      </div>
      <div className="card__content-teams-info-price">
        <p>${price}</p>
      </div>
      <div className="card__content-teams-info-potential-payment">
        ${price * odds}
      </div>
    </div>
  );
}

export default TeamsInfo;
