import React from "react";
import "./TeamsInfo.css";

function TeamsInfo({ sport, bet, odds, mainImage, date, teams, price, teamImage }) {
  const formatToCOP = (value) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value).replace(/,00$/, '');
  };
  return (
      <div className="card__content-teams-info">
      <div className="card__content-teams-info-bet">{bet}</div>
      <div className="card__content-header">
          <div className="card__content-header-icon">
            <img src="https://img.icons8.com/ios/50/000000/football2.png" alt="sport icon" />
          </div>
          <p className="card__content-header-text">{sport}</p>
        </div>
      <div className="card__content-teams-info-odds">{odds}X</div>

      <div className="card__content-teams-info-date">{date}</div>
      <div className="card__content-teams-info-container-main-image">
        <div className={`card__content-teams-info-main-image  ${teamImage ? 'team-image-true' : 'team-image-false'}`}>
          <img src={mainImage} alt="main team" />
        </div>
      </div>
      <div className="card__content-teams-info-teams">
      <div >
        <div className="card__content-teams-info-teams-team">
          <img src={teams[0].image} alt={teams[0].name} />
          <div>{teams[0].name}</div>
        </div>
        <div className="card__content-teams-info-teams-team">
          <img src={teams[1].image} alt={teams[1].name} />
          <div>{teams[1].name}</div>
        </div>
      </div>
      </div>

      <div className="card__content-teams-info-price">
        <p>$ {price}</p>
      </div>
      <div className="card__content-teams-info-potential-payment">
      {formatToCOP(price * odds)}
      </div>
    </div>
  );
}

export default TeamsInfo;
