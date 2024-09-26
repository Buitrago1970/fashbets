import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css"; // Asegúrate de que este archivo CSS esté presente

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

  const getTransformStyle = (index) => {
    switch (index) {
      case 0:
        return {
          transform: "none",
        };
      case 1:
        return {
          transform: "scale(0.95) translateY(15px)",
        };
      case 2:
        return {
          transform: "scale(0.9) translateY(30px)",
        };
      default:
        return {
          transform: "scale(0.85) translateY(45px)",
        };
    }
  };

  return (
    <div className="cards-container">
      <div className="card-stack">
        {cards
          .slice(0, 3)
          .reverse()
          .map((card, index) => {
            const style = {
              backgroundImage: `url(${card.url})`,
              zIndex: cards.length - index,
              ...getTransformStyle(index),
            };

            return (
              <TinderCard
                className="swipe"
                key={card.name}
                onSwipe={(dir) => onSwipe(dir, card.name)}
                onCardLeftScreen={() => onCardLeftScreen(card.name)}
                {...swipeConfig}
              >
                <div className="card" style={style}>
                  <h3>{card.name}</h3>
                </div>
              </TinderCard>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
