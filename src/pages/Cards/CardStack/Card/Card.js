import React, { useRef } from "react";
import gsap from "gsap";
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
        currentX.current > 0 ? window.innerWidth : - window.innerWidth;

      gsap.to(cardRef.current, {
        x: endX,
        rotation: 0,
        duration: 0.5,
        onComplete: () => {
          onSwipe(direction, card.name);
        },
      });
    } else {
      gsap.to(cardRef.current, { x: 0, rotation: 0, duration: 0.3 });
    }
    currentX.current = 0;
  };

  const offsetY = zIndex * 2;

  return (
    <div
      className="card"
      ref={cardRef}
      style={{
        zIndex,
        transform: `translateY(-${offsetY}px)`,
        touchAction: 'none'
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
