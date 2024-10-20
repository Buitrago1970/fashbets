import React, { useState, useEffect, useRef } from "react";

// import Card from "./Card/Card";
import HeaderTabs from "./HeaderTabs/HeaderTabs";
import CardStack from "./CardStack/CardStack";
import ActionButtons from "./ActionButtons/ActionButtons";
import TimerBar from "./TimerBar/TimerBar";
import HistoryPopup from "./HistoryPopup/HistoryPopup";
import Swal from "sweetalert2";

import "./Cards.css";

import data from "./data.json";

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
  const [initialData, setInitialData] = useState([]);
  const [shouldWiggle, setShouldWiggle] = useState(false);
  const betTimer = 20;

  const timerRef = useRef(null);

  useEffect(() => {
    setInitialData(data);
  }, []);

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
  }, [selectedTab, initialData]);

  useEffect(() => {
    if (cards.length > 0) {
      setTimer(0);
      clearInterval(timerRef.current);
      startTimer(cards[0]);
    } else {
      clearInterval(timerRef.current);
    }
  }, [cards]);

  const startTimer = (card) => {
    const duration = Math.floor(betTimer); // Duración del temporizador en segundos
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer >= duration) {
          clearInterval(timerRef.current);
          // Si el tiempo se agota y no se hizo swipe, se cancela la apuesta
          onSwipe("timeout", card?.name);
          return 0;
        }
        if (prevTimer >= duration - 10) {
          setShouldWiggle(true);
        } else {
          setShouldWiggle(false);
        }
        return prevTimer + 0.1; // Incrementa el timer cada 100ms
      });
    }, 100);
  };

  const onSwipe = (direction, name) => {
    if (!name) return;
    const swipedCard = cards.find((card) => card.name === name);
    let betStatus = "";

    if (direction === "right") {
      betStatus = "Aprobada";
      setAcceptedBetsCount((prevCount) => prevCount + 1);
      showApprovedPopup();
    } else if (direction === "left") {
      betStatus = "Rechazada";
      showDeclinePopup();
    } else if (direction === "timeout") {
      betStatus = "Cancelada por tiempo";
    }

    setBetHistory((prevHistory) => [
      ...prevHistory,
      {
        name: swipedCard.bet,
        status: betStatus,
        odds: swipedCard.odds,
        sport: swipedCard.sport,
        teams: swipedCard.teams,
        price: swipedCard.bettingInfo.price,
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

  const showDeclinePopup = () => {
    Swal.fire({
      title: "¡Apuesta Rechazada!",
      text: "Has rechazado la apuesta",
      background: "#f7f7f7", // Un fondo suave
      width: 300, // Reducir el tamaño del popup
      padding: "1em", // Hacer el padding más pequeño
      color: "#000",
      icon: "error",
      iconColor: "#ff6347",
      backdrop: `
        rgba(0,0,123,0.1) // Hacer el fondo de la pantalla más sutil
      `,
      customClass: {
        title: "poster-title",
        popup: "poster-popup",
      },
      showConfirmButton: false,
      timer: 2000, // Duración de 2 segundos
      timerProgressBar: false, // Eliminamos la barra de progreso para mayor simplicidad
      position: "top", // Posicionar en la parte superior
      toast: true, // Lo hace menos invasivo como una notificación tipo "toast"
    });
  };
  const showApprovedPopup = () => {
    Swal.fire({
      title: "¡Apuesta Aprobada!",
      text: "Tu apuesta está en juego, ¡vamos a ganar!",
      background: "#f0f5f1", // Fondo verde suave
      width: 350,
      padding: "1.5em",
      color: "#333",
      icon: "success",
      iconColor: "#28a745", // Verde de éxito
      backdrop: `
        rgba(0,0,0,0.4)
        url("https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif")  // GIF de confeti animado
        center top
        no-repeat
      `,
      customClass: {
        title: "approved-title",
        popup: "approved-popup",
      },
      showConfirmButton: false,
      timer: 2500, // Dura 2.5 segundos
      timerProgressBar: true,
      position: "center",
      toast: true,
    });
  };
  const swipeCard = (direction) => {
    if (cards.length === 0) return;
    const currentCard = cards[0];
    onSwipe(direction, currentCard.name);
  };

  const handleHistoryClick = () => {
    setShowHistoryPopup(true);
  };

  const closeHistoryPopup = () => {
    setShowHistoryPopup(false);
  };

  const progressPercentage = (timer / betTimer) * 100;

  return (
    <>
      {/* Encabezado con las opciones */}
      <HeaderTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* Barra de progreso del temporizador */}
      <div className="timer-conatainer">
        <TimerBar progressPercentage={progressPercentage} />
      </div>

      {/* Contenedor de tarjetas */}
      <div className="cards-container">
        <CardStack
          cards={cards}
          onSwipe={onSwipe}
          shouldWiggle={shouldWiggle}
        />
      </div>

      {/* Botones de acción y botón de historial */}
      <ActionButtons
        swipeCard={swipeCard}
        acceptedBetsCount={acceptedBetsCount}
        handleHistoryClick={handleHistoryClick}
      />

      {/* Pop-up de historial de apuestas */}
      {showHistoryPopup && (
        <HistoryPopup
          betHistory={betHistory}
          closeHistoryPopup={closeHistoryPopup}
        />
      )}
    </>
  );
};

export default Cards;
