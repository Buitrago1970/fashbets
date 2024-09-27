import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";

const initialData = [
  { name: "Card 1", url: "https://via.placeholder.com/300x400?text=Card+1" },
  { name: "Card 2", url: "https://via.placeholder.com/300x400?text=Card+2" },
  { name: "Card 3", url: "https://via.placeholder.com/300x400?text=Card+3" },
  { name: "Card 4", url: "https://via.placeholder.com/300x400?text=Card+4" },
  { name: "Card 5", url: "https://via.placeholder.com/300x400?text=Card+5" },
  { name: "Card 6", url: "https://via.placeholder.com/300x400?text=Card+6" },
  { name: "Card 7", url: "https://via.placeholder.com/300x400?text=Card+7" },
  { name: "Card 8", url: "https://via.placeholder.com/300x400?text=Card+7" },
];

const Cards = () => {
  const [cards, setCards] = useState(initialData);

  const onSwipe = (direction, name) => {
    if (direction === "right") {
      console.log("Carta deslizada hacia la derecha");
    } else if (direction === "left") {
      console.log("Carta deslizada hacia la izquierda");
    }
  };

  const onCardLeftScreen = (name) => {
    setCards((prevCards) => prevCards.filter((card) => card.name !== name));
  };

  // Configuración del swipe
  const swipeConfig = {
    flickOnSwipe: true,
    swipeRequirementType: "distance",
    swipeThreshold: 100,
    preventSwipe: ["up", "down"],
  };

  return (
    <div className="cards-container">
      <div className="card-stack">
        {cards.map((card, index) => {
          return (
            <TinderCard
              className="swipe"
              key={card.name}
              onSwipe={(dir) => onSwipe(dir, card.name)}
              onCardLeftScreen={() => onCardLeftScreen(card.name)}
              {...swipeConfig}
            >
              <div className="card">
                <div className="card-container-progress">
                  <div className="card__progress-bar"></div>
                </div>
                <div className="card__content">
                  <div className="card__content-header">
                    <div className="card__content-header-left">
                      <p className="card__live">En vivo</p>
                      <p className="card__sport">Futbol</p>
                    </div>
                    <div className="card__content-header-right">
                      <p className="card__time">75:35</p>
                    </div>
                  </div>
                  <div className="card__teams">
                    <div className="card__league">
                      <p>Colombia / Liga BetPlay Dimayor</p>
                    </div>
                    <div className="card__score">
                      <div className="card__score-teams">
                        <div className="card__team">
                          <p className="card__team-score">0</p>
                          <p className="card__team-name">Arsenal</p>
                        </div>
                        <div className="card__team">
                          <p className="card__team-score">1</p>
                          <p className="card__team-name">Liverpool</p>
                        </div>
                      </div>
                      <div className="card__betting">
                        <p className="card__betting-odds">4.25</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
