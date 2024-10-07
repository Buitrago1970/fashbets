import React, { useRef } from "react";
import gsap from "gsap";
import CardHeader from "./CardHeader/CardHeader";
import TeamsInfo from "./TeamsInfo/TeamsInfo";
import "./Card.css";

function Card({ card, onSwipe, zIndex }) {
  const cardRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  const handleDragStart = (e) => {
    e.preventDefault();
    isDragging.current = true;
    startX.current = e.type.includes("touch")
      ? e.touches[0].clientX
      : e.clientX;
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    currentX.current = clientX - startX.current;

    const rotation = (currentX.current / window.innerWidth) * 33; // Efecto de rotación
    gsap.to(cardRef.current, {
      x: currentX.current,
      rotation,
      duration: 0,
    });
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
          gsap.set(cardRef.current, { x: 0, rotation: 0 });
        },
      });
    } else {
      gsap.to(cardRef.current, { x: 0, rotation: 0, duration: 0.3 });
    }
    currentX.current = 0;
  };

  const offsetY = zIndex * 3;

  return (
    <div
      className="card"
      ref={cardRef}
      style={{
        zIndex,
        transform: `translateY(-${offsetY}px)`,
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
      <div className="card__content">
        <CardHeader sport={card.sport} />
        <TeamsInfo
          teams={card.teams}
          time={card.time}
          betFor={card.bettingInfo.betFor}
        />
      </div>
    </div>
  );
}

export default Card;
