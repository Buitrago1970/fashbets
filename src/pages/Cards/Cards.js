// Cards.js
import React, { useState, useEffect, useRef } from "react";
import Card from "./Card/Card";
import "./Cards.css";
import HeaderTabs from "./HeaderTabs/HeaderTabs";

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
      price: 1000,
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
      price: 1000,
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
      price: 1000,
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
      price: 1000,
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
      price: 1000,
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
      price: 1000,
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
      price: 1000,
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
      price: 1000,
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
      price: 1000,
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
      price: 1000,
    },
  },
];

// Datos de ejemplo para cada categoría
const siguiendoData = [];

const recomendadoData = [];

const enVivoData = [];

const shuffleArray = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Cards = () => {
  const [selectedTab, setSelectedTab] = useState("Siguiendo");
  const [cards, setCards] = useState([]);
  const [betHistory, setBetHistory] = useState([]);
  const [allSwiped, setAllSwiped] = useState(false);
  const [timer, setTimer] = useState(0);
  const [acceptedBetsCount, setAcceptedBetsCount] = useState(0);
  const [showHistoryPopup, setShowHistoryPopup] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    // Actualizar las tarjetas según la pestaña seleccionada
    let data;
    if (selectedTab === "Siguiendo") {
      data = siguiendoData.length > 0 ? siguiendoData : initialData;
    } else if (selectedTab === "Recomendado") {
      data = recomendadoData.length > 0 ? recomendadoData : initialData;
    } else if (selectedTab === "En vivo") {
      data = enVivoData.length > 0 ? enVivoData : initialData;
    }

    const shuffledData = shuffleArray(data);
    setCards(shuffledData);
    setAllSwiped(false);
    setTimer(0);
    clearInterval(timerRef.current);
    startTimer();
  }, [selectedTab]);

  useEffect(() => {
    if (cards.length > 0) {
      setTimer(0);
      clearInterval(timerRef.current);
      startTimer();
    } else {
      clearInterval(timerRef.current);
    }
  }, [cards]);

  const startTimer = () => {
    const duration = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Tiempo aleatorio entre 10 y 20 segundos
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer >= duration) {
          clearInterval(timerRef.current);
          // Si el tiempo se agota y no se hizo swipe, se cancela la apuesta
          onSwipe("timeout", cards[cards.length - 1]?.name);
          return 0;
        }
        return prevTimer + 0.1; // Incrementa el timer cada 100ms
      });
    }, 100);
  };

  const onSwipe = (direction, name) => {
    if (!name) return; // Si no hay tarjeta, no hacer nada
    const swipedCard = cards.find((card) => card.name === name);

    let betStatus = "Rechazada"; // Por defecto, se rechaza

    if (direction === "right") {
      betStatus = "Aprobada";
      setAcceptedBetsCount((prevCount) => prevCount + 1); // Incrementa el contador de apuestas aceptadas
    } else if (direction === "left") {
      betStatus = "Rechazada";
    } else if (direction === "timeout") {
      betStatus = "Cancelada por tiempo";
    }

    // Agregar la apuesta al historial con el estado correspondiente
    setBetHistory((prevHistory) => [
      ...prevHistory,
      {
        match: name,
        betType: swipedCard.bettingInfo.betType,
        betFor: swipedCard.bettingInfo.betFor,
        odds: swipedCard.bettingInfo.odds,
        status: betStatus,
      },
    ]);

    // Filtrar la tarjeta deslizada
    setCards((prevCards) => {
      const newCards = prevCards.filter((card) => card.name !== name);

      // Si no quedan más tarjetas, se marca que ya se deslizaron todas
      if (newCards.length === 0) {
        setAllSwiped(true);
      }

      return newCards;
    });
  };

  const swipeCard = (direction) => {
    if (cards.length === 0) return;
    const currentCard = cards[cards.length - 1];

    onSwipe(direction, currentCard.name);
  };

  const handleHistoryClick = () => {
    setShowHistoryPopup(true);
  };

  const closeHistoryPopup = () => {
    setShowHistoryPopup(false);
  };

  const progressPercentage = (timer / 25) * 100; // Asumiendo 20 segundos como máximo

  return (
    <>
      {/* Encabezado con las opciones */}
      <HeaderTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* Contenedor de tarjetas */}
      <div className="cards-container">
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
      </div>

      {/* Botones de acción y botón de historial */}
      <div className="buttons-container">
        <button
          className="action-button reject-button"
          onClick={() => swipeCard("left")}
        >
          X
        </button>
        <button
          className="action-button approve-button"
          onClick={() => swipeCard("right")}
        >
          ✔
        </button>
        <button className="history-button" onClick={handleHistoryClick}>
          {acceptedBetsCount}
        </button>
      </div>

      {/* Barra de progreso del temporizador */}
      <div className="timer-bar">
        <div
          className="timer-progress"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Pop-up de historial de apuestas */}
      {showHistoryPopup && (
        <div className="history-popup">
          <div className="history-popup-content">
            <h2>Historial de Apuestas</h2>
            <p>¡Hola! ¡Este es el historial de apuestas!</p>
            {/* Aquí puedes agregar más detalles de las apuestas aceptadas */}
            <button onClick={closeHistoryPopup}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
