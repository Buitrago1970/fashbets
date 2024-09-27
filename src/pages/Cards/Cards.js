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
      betType: "Ganador del partido",
      betFor: "Liverpool",
      odds: 2.5,
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
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5VMOvn3uJgjIl_mzbbNawTP3-eFmYqNyig&s",
      },
      {
        name: "Barcelona",
        score: 2,
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/2020px-FC_Barcelona_%28crest%29.svg.png",
      },
    ],
    bettingInfo: {
      betType: "Primero en marcar",
      betFor: "Real Madrid",
      odds: 3.0,
    },
  },
  {
    name: "Match 3",
    live: true,
    sport: "Fútbol",
    time: "45:20",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      {
        name: "Atlético Nacional",
        score: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d7/Atl%C3%A9tico_Nacional.png",
      },
      {
        name: "Deportivo Cali",
        score: 0,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/4a/Escudo_Deportivo_Cali.png",
      },
    ],
    bettingInfo: {
      betType: "Total de goles",
      betFor: "Más de 2.5 goles",
      odds: 1.8,
    },
  },
  {
    name: "Match 4",
    live: true,
    sport: "Fútbol",
    time: "30:45",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      {
        name: "Millonarios",
        score: 2,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Escudo_de_Millonarios_F%C3%BAtbol_Club.svg/1200px-Escudo_de_Millonarios_F%C3%BAtbol_Club.svg.png",
      },
      {
        name: "Santa Fe",
        score: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/58/Escudo_de_Independiente_Santa_Fe.png",
      },
    ],
    bettingInfo: {
      betType: "Ambos equipos marcan",
      betFor: "Sí",
      odds: 2.0,
    },
  },
  {
    name: "Match 5",
    live: true,
    sport: "Fútbol",
    time: "22:10",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      {
        name: "Junior",
        score: 0,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/ESCUDO_JUNIOR.svg/1200px-ESCUDO_JUNIOR.svg.png",
      },
      {
        name: "Once Caldas",
        score: 0,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Once_Caldas_logo-svg.svg/1200px-Once_Caldas_logo-svg.svg.png",
      },
    ],
    bettingInfo: {
      betType: "Primer gol",
      betFor: "Junior",
      odds: 1.9,
    },
  },
  {
    name: "Match 6",
    live: true,
    sport: "Fútbol",
    time: "78:55",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      {
        name: "América de Cali",
        score: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Am%C3%A9rica_de_Cali.png/134px-Am%C3%A9rica_de_Cali.png",
      },
      {
        name: "Patriotas",
        score: 0,
        image:
          "https://upload.wikimedia.org/wikipedia/en/b/b2/Patriotas_logo.png",
      },
    ],
    bettingInfo: {
      betType: "Resultado exacto",
      betFor: "1-0 América",
      odds: 3.5,
    },
  },
  {
    name: "Match 7",
    live: true,
    sport: "Fútbol",
    time: "50:10",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      {
        name: "Deportes Tolima",
        score: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/41/Escudo_Deportes_Tolima_Sin_A%C3%B1o_2.png",
      },
      {
        name: "La Equidad",
        score: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/La_Equidad_Seguros_logo.svg/800px-La_Equidad_Seguros_logo.svg.png",
      },
    ],
    bettingInfo: {
      betType: "Marcador al descanso",
      betFor: "1-1",
      odds: 2.1,
    },
  },
  {
    name: "Match 8",
    live: true,
    sport: "Fútbol",
    time: "85:15",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      {
        name: "Envigado",
        score: 0,
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4e/Envigado_FC_logo_2018.png",
      },
      {
        name: "Alianza Petrolera",
        score: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Escudo-alianza-petrolera-1990.png/1200px-Escudo-alianza-petrolera-1990.png",
      },
    ],
    bettingInfo: {
      betType: "Doble oportunidad",
      betFor: "Alianza o empate",
      odds: 1.75,
    },
  },
  {
    name: "Match 9",
    live: true,
    sport: "Fútbol",
    time: "40:25",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      {
        name: "Rionegro Águilas",
        score: 2,
        image:
          "https://upload.wikimedia.org/wikipedia/en/a/aa/LogoAguilasPereira.png",
      },
      {
        name: "Jaguares de Córdoba",
        score: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/de/Jaguares_de_C%C3%B3rdoba.png",
      },
    ],
    bettingInfo: {
      betType: "Ganador del partido",
      betFor: "Rionegro Águilas",
      odds: 1.95,
    },
  },
  {
    name: "Match 10",
    live: true,
    sport: "Fútbol",
    time: "35:00",
    league: "Colombia / Liga BetPlay Dimayor",
    teams: [
      {
        name: "Independiente Medellín",
        score: 0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBY0KC-MykHbnt8HKKGUJUCg0ZCEAGx0E-6w&s",
      },
      {
        name: "Atlético Bucaramanga",
        score: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Escudo_Atletico_Bucaramanga_Campe%C3%B3n_2024_I.png",
      },
    ],
    bettingInfo: {
      betType: "Ambos equipos marcan",
      betFor: "Sí",
      odds: 2.3,
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
