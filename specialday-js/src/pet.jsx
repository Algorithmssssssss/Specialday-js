import React, { useRef, useEffect, useState } from "react";
import "./pet.css";

function Pet() {
  const [isWalking, setIsWalking] = useState(true);
  const petContainerRef = useRef(null);

  useEffect(() => {
    let x = 0;

    let xSpeed = 0.5;

    function updatePosition() {
      x += xSpeed;

      if (x + petContainerRef.current.offsetWidth >= window.innerWidth) {
        xSpeed = -xSpeed;
      }

      if (x <= 0) {
        xSpeed = -xSpeed;
      }

      petContainerRef.current.style.left = `${x}px`;

      requestAnimationFrame(updatePosition);
    }

    updatePosition();
  }, []);

  function handleMouseEnter() {
    setIsWalking(false);
  }

  function handleMouseLeave() {
    setIsWalking(true);
  }

  return (
    <div
      ref={petContainerRef}
      className="pet-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isWalking ? (
        <img src="/src/crab/idle2.gif" alt="Walking Pet" />
      ) : (
        <img src="/src/crab/idle1.gif" alt="Hovering Pet" />
      )}
    </div>
  );
}

export default Pet;
