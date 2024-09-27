import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import Card from "./Card/Card";
import "./Cards.css";

const initialData = [
  {
    name: "Match 1",
    live: true,
    sport: "Fútbol",
    time: "75:35",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      {
        name: "Arsenal",
        score: 0,
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
      },
      {
        name: "Liverpool",
        score: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
      },
    ],
    bettingInfo: {
      betType: "Ganador del partido", // Tipo de apuesta general
      betFor: "Liverpool", // Equipo a favor
      odds: 2.5, // Cuota
    },
  },
  {
    name: "Match 2",
    live: true,
    sport: "Fútbol",
    time: "60:00",
    league: "España / La Liga",
    teams: [
      {
        name: "Real Madrid",
        score: 2,
        image: "https://link-to-real-madrid-image.com/real-madrid.png",
      },
      {
        name: "Barcelona",
        score: 2,
        image: "https://link-to-barcelona-image.com/barcelona.png",
      },
    ],
    bettingInfo: {
      betType: "Primero en marcar",
      betFor: "Real Madrid",
      odds: 3.0,
    },
  },
];

const shuffleArray = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffledData = shuffleArray(initialData);
    setCards(shuffledData);
  }, []);

  const onSwipe = (direction, name) => {
    setCards((prevCards) => prevCards.filter((card) => card.name !== name));
  };

  const totalCards = initialData.length;
  const swipedCards = totalCards - cards.length;
  const progress = (swipedCards / totalCards) * 100;

  return (
    <>
      <ProgressBar progress={progress} />
      <div className="cards-container">
        <div className="card-stack">
          {cards.map((card) => (
            <Card key={card.name} card={card} onSwipe={onSwipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
