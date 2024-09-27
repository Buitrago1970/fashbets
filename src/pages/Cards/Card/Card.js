import React from "react";
import TinderCard from "react-tinder-card";
import CardHeader from "./CardHeader/CardHeader";
import TeamsInfo from "./TeamsInfo/TeamsInfo";
import AuthInfo from "./AuthInfo/AuthInfo";
import "../Cards.css";

const swipeConfig = {
  flickOnSwipe: true,
  swipeRequirementType: "distance",
  swipeThreshold: 50,
  preventSwipe: ["up", "down"],
};

function Card({ card, onSwipe }) {
  return (
    <TinderCard
      className="swipe"
      onSwipe={(dir) => onSwipe(dir, card.name)}
      {...swipeConfig}
    >
      <div className="card">
        <div className="card__content">
          <CardHeader league={card.league} sport={card.sport} />
          <TeamsInfo
            teams={card.teams}
            time={card.time}
            betFor={card.bettingInfo.betFor}
          />
          <AuthInfo betInfo={card.bettingInfo} />
        </div>
      </div>
    </TinderCard>
  );
}

export default Card;
