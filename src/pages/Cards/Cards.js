import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";

const initialData = [
  {
    name: "Match 1",
    live: true,
    sport: "Fútbol",
    time: "75:35",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      { name: "Arsenal", score: 0 },
      { name: "Liverpool", score: 1 },
    ],
    bettingOdds: 4.25,
  },
  {
    name: "Match 2",
    live: true,
    sport: "Fútbol",
    time: "60:00",
    league: "España / La Liga",
    teams: [
      { name: "Real Madrid", score: 2 },
      { name: "Barcelona", score: 2 },
    ],
    bettingOdds: 3.5,
  },
  {
    name: "Match 3",
    live: true,
    sport: "Fútbol",
    time: "85:12",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      { name: "Atlético Nacional", score: 1 },
      { name: "Deportivo Cali", score: 0 },
    ],
    bettingOdds: 2.75,
  },
  {
    name: "Match 4",
    live: false,
    sport: "Fútbol",
    time: "90:00",
    league: "Inglaterra / Premier League",
    teams: [
      { name: "Manchester United", score: 3 },
      { name: "Chelsea", score: 1 },
    ],
    bettingOdds: 1.8,
  },
  {
    name: "Match 5",
    live: true,
    sport: "Fútbol",
    time: "48:30",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      { name: "Independiente Medellín", score: 1 },
      { name: "Junior", score: 2 },
    ],
    bettingOdds: 3.25,
  },
  {
    name: "Match 6",
    live: true,
    sport: "Fútbol",
    time: "67:10",
    league: "Italia / Serie A",
    teams: [
      { name: "Juventus", score: 1 },
      { name: "Inter de Milán", score: 1 },
    ],
    bettingOdds: 2.9,
  },
  {
    name: "Match 7",
    live: false,
    sport: "Fútbol",
    time: "90:00",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      { name: "Millonarios", score: 2 },
      { name: "Santa Fe", score: 0 },
    ],
    bettingOdds: 1.6,
  },
  {
    name: "Match 8",
    live: true,
    sport: "Fútbol",
    time: "78:45",
    league: "Francia / Ligue 1",
    teams: [
      { name: "PSG", score: 3 },
      { name: "Olympique de Lyon", score: 1 },
    ],
    bettingOdds: 1.4,
  },
  {
    name: "Match 9",
    live: false,
    sport: "Fútbol",
    time: "90:00",
    league: "Alemania / Bundesliga",
    teams: [
      { name: "Bayern Múnich", score: 4 },
      { name: "Borussia Dortmund", score: 2 },
    ],
    bettingOdds: 1.5,
  },
  {
    name: "Match 10",
    live: true,
    sport: "Fútbol",
    time: "55:00",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      { name: "Once Caldas", score: 0 },
      { name: "Pereira", score: 1 },
    ],
    bettingOdds: 2.65,
  },
  {
    name: "Match 11",
    live: false,
    sport: "Fútbol",
    time: "90:00",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      { name: "Envigado", score: 1 },
      { name: "Patriotas", score: 1 },
    ],
    bettingOdds: 3.75,
  },
  {
    name: "Match 12",
    live: true,
    sport: "Fútbol",
    time: "72:20",
    league: "España / La Liga",
    teams: [
      { name: "Atlético de Madrid", score: 0 },
      { name: "Sevilla", score: 1 },
    ],
    bettingOdds: 2.95,
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

  const totalCards = initialData.length;
  const swipedCards = totalCards - cards.length;
  const progress = (swipedCards / totalCards) * 100;

  // Swipe action handler
  const onSwipe = (direction, name) => {
    setCards((prevCards) => prevCards.filter((card) => card.name !== name));
  };

  const swipeConfig = {
    flickOnSwipe: true,
    swipeRequirementType: "distance",
    swipeThreshold: 120,
    preventSwipe: ["up", "down"],
  };

  const handleLeftSwipe = () => {
    if (cards.length > 0) {
      const currentIndex = cards.length - 1;
      onSwipe("left", cards[currentIndex].name);
    }
  };

  const handleRightSwipe = () => {
    if (cards.length > 0) {
      const currentIndex = cards.length - 1;
      onSwipe("right", cards[currentIndex].name);
    }
  };

  return (
    <>
      <div className="cards-container">
        <div className="card-stack">
          {cards.map((card) => (
            <TinderCard
              className="swipe"
              key={card.name}
              onSwipe={(dir) => onSwipe(dir, card.name)}
              {...swipeConfig}
            >
              <div className="card">
                <div className="card__content">
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="card__content-header">
                    <div className="card__content-header-left">
                      {card.live && <p className="card__live">En vivo</p>}
                      <p className="card__sport">{card.sport}</p>
                    </div>
                    <div className="card__content-header-right">
                      <p className="card__time">{card.time}</p>
                    </div>
                  </div>
                  <div className="card__teams">
                    <div className="card__league">
                      <p>{card.league}</p>
                    </div>
                    <div className="card__score">
                      <div className="card__score-teams">
                        <div className="card__team">
                          <p className="card__team-score">
                            {card.teams[0].score}
                          </p>
                          <p className="card__team-name">
                            {card.teams[0].name}
                          </p>
                        </div>
                        <div className="card__team">
                          <p className="card__team-score">
                            {card.teams[1].score}
                          </p>
                          <p className="card__team-name">
                            {card.teams[1].name}
                          </p>
                        </div>
                      </div>
                      <div className="card__betting">
                        <p className="card__betting-odds">{card.bettingOdds}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button className="swipe-button left" onClick={handleLeftSwipe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="green"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>{" "}
        </button>
        <button className="swipe-button right" onClick={handleRightSwipe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Cards;
