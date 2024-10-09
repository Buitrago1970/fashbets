import React, { useState } from "react";
import "./TeamsInfo.css";

import baloncesto from "../../../../../assets/baloncesto.svg";
import futball from "../../../../../assets/futball.svg";
import tenis from "../../../../../assets/tenis.svg";
import Americano from "../../../../../assets/Americano.svg";
import golf from "../../../../../assets/golf.svg";
import f1 from "../../../../../assets/f1.svg";
import mma from "../../../../../assets/mma.svg";

function TeamsInfo({
  sport,
  bet,
  odds,
  mainImage,
  date,
  teams,
  initialPrice,
  teamImage,
}) {
  const [price, setPrice] = useState(initialPrice);

  const formatToCOP = (value) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    })
      .format(value)
      .replace(/,00$/, "");
  };

  const increasePrice = () => {
    setPrice(price + 500);
  };

  const decreasePrice = () => {
    setPrice(price - 500);
  };

  return (
    <div className="card__content-teams-info">
      <div className="card__content-teams-info-bet">
        <p className="card__content-teams-info-bet-text">{bet}</p>
        <div className="card__content-header">
          <div className="card__content-header-icon">
            {sport === "Baloncesto" && (
              <img src={baloncesto} alt="baloncesto" />
            )}
            {sport === "Fútbol" && <img src={futball} alt="futball" />}
            {sport === "Tenis" && <img src={tenis} alt="tenis" />}
            {sport === "Fútbol Americano" && (
              <img src={Americano} alt="Americano" />
            )}
            {sport === "Golf" && <img src={golf} alt="golf" />}
            {sport === "Fórmula 1" && <img src={f1} alt="f1" />}
            {sport === "MMA" && <img src={mma} alt="mma" />}
          </div>
          <p className="card__content-header-text">{sport}</p>
        </div>
      </div>
      <div className="card__content-teams-info-odds">{odds}X</div>
      <div className="card__content-teams-info-date">{date}</div>
      <div className="card__content-teams-info-container-main-image">
        <div
          className={`card__content-teams-info-main-image  ${
            teamImage ? "team-image-true" : "team-image-false"
          }`}
        >
          <img src={mainImage} alt="main team" />
        </div>
      </div>
      <div className="card__content-teams-info-teams">
        <div>
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
        <button onClick={decreasePrice}>-</button>
        <p>{formatToCOP(price)}</p>
        <button onClick={increasePrice}>+</button>
      </div>
      <div className="card__content-teams-info-potential-payment">
        {formatToCOP(price * odds)}
      </div>
    </div>
  );
}

export default TeamsInfo;
