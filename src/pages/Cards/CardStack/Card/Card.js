import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import TeamsInfo from "./TeamsInfo/TeamsInfo";
import "./Card.css";

function Card({ card, onSwipe, zIndex, shouldWiggle, onCardClick }) {
  const cardRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const [bgColor, setBgColor] = useState("white");
  const wiggleAnimation = useRef(null);

  useEffect(() => {
    if (shouldWiggle) {
      const timeline = gsap.timeline({ repeat: -1, ease: "power1.inOut" });

      timeline
        .to(cardRef.current, { x: -10, duration: 0.3 }) // Izquierda al medio
        .to(cardRef.current, { x: 0, duration: 0.3 }) // Medio
        .to(cardRef.current, { x: 10, duration: 0.3 }) // Medio a derecha
        .to(cardRef.current, { x: 0, duration: 0.3 }); // Regresa al medio

      wiggleAnimation.current = timeline;
    } else if (wiggleAnimation.current) {
      wiggleAnimation.current.kill();
      wiggleAnimation.current = null;
      gsap.to(cardRef.current, { x: 0, rotation: 0, duration: 0.3 });
    }
  }, [shouldWiggle]);

  const handleDragStart = (e) => {
    e.preventDefault();
    if (wiggleAnimation.current) {
      wiggleAnimation.current.kill();
      wiggleAnimation.current = null;
      // No resetear x y rotation aquí
      // gsap.set(cardRef.current, { x: 0, rotation: 0 });
    }
    isDragging.current = true;
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const currentXPosition = gsap.getProperty(cardRef.current, "x");
    startX.current = clientX - currentXPosition;
  };

  const handleDragMove = (e) => {
    e.preventDefault();

    if (!isDragging.current) return;
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    currentX.current = clientX - startX.current;

    const rotation = (currentX.current / window.innerWidth) * 15; // Efecto de rotación más sutil
    gsap.set(cardRef.current, {
      x: currentX.current,
      rotation,
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
    const lightGreen = [212, 237, 218, 1];
    const darkGreen = [82, 196, 26];

    const lightRed = [248, 215, 218];
    const darkRed = [255, 0, 0];

    // Ajustar el color basado en el porcentaje de deslizamiento
    if (swipePercentage > 0.13) {
      const factor = Math.min((swipePercentage - 0.13) / 0.7, 1); // Limitar el factor al 100%
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
          currentX.current = 0;

          // No reiniciamos la animación de wiggle si la tarjeta se ha deslizado fuera
        },
      });
    } else {
      gsap.to(cardRef.current, {
        x: 0,
        rotation: 0,
        duration: 0.3,
        onComplete: () => {
          currentX.current = 0;
          setBgColor("white"); // Restablecer el color de fondo

          // Reiniciar la animación de wiggle si es necesario
          if (shouldWiggle) {
            wiggleAnimation.current = gsap.to(cardRef.current, {
              x: "+=5",
              rotation: "+=2",
              duration: 0.6,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
              overwrite: true,
            });
          }
        },
      });
    }
  };
  return (
    <div
      className="card"
      ref={cardRef}
      style={{
        zIndex,
        touchAction: "none",
        backgroundColor: bgColor,
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
        initialPrice={card.bettingInfo.price}
        teamImage={card.teamImage}
      />
    </div>
  );
}

export default Card;
