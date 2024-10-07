import React from "react";
import "./TeamsInfo.css";

function TeamsInfo({ sport, bet, odds, mainImage, date, teams, price }) {
  return (
    <div>
      <div className="card__content-header-container">
        <div className="card__content-header">
          <div className="card__content-header-icon">
            <img src="https://img.icons8.com/ios/50/000000/football2.png" alt="sport icon" />
          </div>
          <div className="card__content-header-text">{sport}</div>
        </div>
      </div>
      <div className="card__content-teams-info">
      <div className="card__content-teams-info-bet">{bet}</div>
      <div className="card__content-teams-info-odds">{odds}X</div>
      <div className="card__content-teams-info-container-main-image">
        <div className="card__content-teams-info-main-image">
          <img src={mainImage} alt="main team" />
        </div>
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
      <div className="ard__content-teams-container-info-button">
        <button className="card__content-teams-info-button">+ Ver Mas</button>
      </div>
      <div className="card__content-teams-info-price">
        <p>$ {price}</p>
      </div>
      <div className="card__content-teams-info-potential-payment">
        ${price * odds}
      </div>
    </div>
    </div>
  );
}

export default TeamsInfo;
