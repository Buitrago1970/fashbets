import React from "react";
import Card from "./Card/Card";
import "./CardStack.css";

function CardStack({ cards, onSwipe }) {
  return (
    <div className="card-stack">
      {cards.map((card, index) => (
        <Card
          key={card.name}
          card={card}
          onSwipe={onSwipe}
          zIndex={cards.length - index}
        />
      ))}
    </div>
  );
}

export default CardStack;
