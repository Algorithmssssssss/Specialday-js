import React, { useRef, useEffect, useState } from "react";
import "./pet.css";
import walkImg from "/src/crab/dog_walk.gif";
import swipeImg from "/src/crab/dog_swipe.gif";


function Pet() {

    const [isWalking, setIsWalking] = useState(true);
    const [x, setX] = useState(0);
    const [xSpeed, setXSpeed] = useState(0.001);
    const [flip, setFlip] = useState(false);
    const petContainerRef = useRef(null);
    function handleMouseEnter() {
      setIsWalking(false);
      // save the current position
      setX(parseFloat(petContainerRef.current.style.left));
    }

    function handleMouseLeave() {
      setIsWalking(true);
      // continue animation from the saved position
      petContainerRef.current.style.left = x + "px";
    }

    useEffect(() => {
      let animationId;

      function updatePosition() {
        setX((prevX) => prevX + xSpeed);

        if (x + petContainerRef.current.offsetWidth >= window.innerWidth) {
          setXSpeed((prevSpeed) => -prevSpeed);
          setFlip((prevFlip) => !prevFlip);
        }

        if (x <= 0) {
          setXSpeed((prevSpeed) => -prevSpeed);
          setFlip((prevFlip) => !prevFlip);
        }

        petContainerRef.current.style.left = `${x}px`;

        animationId = requestAnimationFrame(updatePosition);
      }

      if (isWalking) {
        updatePosition();
      }

      return () => {
        cancelAnimationFrame(animationId);
      };
    }, [isWalking, x, xSpeed, flip]);

    return (
      <div
        ref={petContainerRef}
        className="pet-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isWalking ? (
          <img
            src={flip ? walkImg : walkImg}
            alt="Walking Pet"
            style={{ transform: flip ? "scaleX(-1)" : "" }}
          />
        ) : (
          <img src={swipeImg} alt="Hovering Pet" />
        )}
      </div>
    );
  };


export default Pet;
