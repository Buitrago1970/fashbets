import React, { useEffect } from "react";
import Card from "./Card/Card";
import "./CardStack.css";

function CardStack({ cards, onSwipe }) {
  //   useEffect(() => {
  //     // Puedes agregar lógica adicional si es necesario cuando cambian las tarjetas
  //   }, [cards]);

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
