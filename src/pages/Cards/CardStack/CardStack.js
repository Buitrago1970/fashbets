import React from "react";
import Card from "./Card/Card";
import "./CardStack.css";

function CardStack({ cards, onSwipe, shouldWiggle, onCardClick }) {
  return (
    <div className="card-stack">
      {cards.map((card, index) => (
        <Card
          key={card.name}
          card={card}
          onSwipe={onSwipe}
          zIndex={cards.length - index}
          onCardClick={onCardClick}
          shouldWiggle={shouldWiggle && index === 0} // Solo la primera tarjeta tendrá shouldWiggle en true
        />
      ))}
    </div>
  );
}

export default CardStack;
