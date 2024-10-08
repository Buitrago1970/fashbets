import React, { useRef, useState } from "react";
import gsap from "gsap";
import TeamsInfo from "./TeamsInfo/TeamsInfo";
import "./Card.css";

function Card({ card, onSwipe, zIndex }) {
  const cardRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const [bgColor, setBgColor] = useState("white");

  const handleDragStart = (e) => {
    e.preventDefault();
    isDragging.current = true;
    startX.current = e.type.includes("touch")
      ? e.touches[0].clientX
      : e.clientX;
  };

  const handleDragMove = (e) => {
    e.preventDefault();

    if (!isDragging.current) return;
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    currentX.current = clientX - startX.current;

    const rotation = (currentX.current / window.innerWidth) * 33; // Efecto de rotación
    gsap.to(cardRef.current, {
      x: currentX.current,
      rotation,
      duration: 0,
    });

    // Calcular el porcentaje de deslizamiento
    const swipePercentage = Math.abs(currentX.current) / window.innerWidth;

    // Función para interpolar entre dos colores
    const interpolateColor = (color1, color2, factor) => {
      const result = color1.slice();
      for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
      }
      return `rgb(${result.join(",")})`;
    };

    // Colores iniciales y finales
    const lightGreen = [212, 237, 218];
    const darkGreen = [82, 196, 26];

    const lightRed = [248, 215, 218];
    const darkRed = [255, 0, 0];

    // Ajustar el color basado en el porcentaje de deslizamiento
    if (swipePercentage > 0.17) {
      const factor = Math.min((swipePercentage - 0.17) / 0.7, 1); // Limitar el factor al 100%
      if (currentX.current > 0) {
        setBgColor(interpolateColor(lightGreen, darkGreen, factor)); // Verde para deslizamiento a la derecha
      } else if (currentX.current < 0) {
        setBgColor(interpolateColor(lightRed, darkRed, factor)); // Rojo para deslizamiento a la izquierda
      }
    } else {
      setBgColor("white");
    }
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (Math.abs(currentX.current) > 50) {
      const direction = currentX.current > 0 ? "right" : "left";
      const endX =
        currentX.current > 0 ? window.innerWidth : -window.innerWidth;

      gsap.to(cardRef.current, {
        x: endX,
        rotation: 0,
        duration: 0.5,
        onComplete: () => {
          onSwipe(direction, card.name);
          setBgColor("white"); // Restablecer el color de fondo
        },
      });
    } else {
      gsap.to(cardRef.current, { x: 0, rotation: 0, duration: 0.3 });
      setBgColor("white"); // Restablecer el color de fondo
    }
    currentX.current = 0;
  };

  return (
    <div
      className="card"
      ref={cardRef}
      style={{
        zIndex,
        touchAction: 'none',
        backgroundColor: bgColor, // Aplicar el color de fondo
      }}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => {
        if (isDragging.current) handleDragEnd();
      }}
    >
      <TeamsInfo
        sport={card.sport}
        bet={card.bet}
        odds={card.odds}
        mainImage={card.mainImage}
        date={card.date}
        teams={card.teams}
        price={card.bettingInfo.price}
        teamImage={card.teamImage}
      />
    </div>
  );
}

export default Card;