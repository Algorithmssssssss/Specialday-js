import React from "react";
import { css } from "linaria";

const SMASH_MS = 300;

const smashStyles = css`
  @keyframes smash {
    0% {
      transform: translate(0, 10px);
    }
    10% {
      transform: translate(20px, -30px);
    }
    20% {
      transform: translate(-12px, 17px);
    }
    40% {
      transform: translate(7px, -9px);
    }
    60% {
      transform: translate(-3px, 4px);
    }
    80% {
      transform: translate(1px, -1px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  animation-name: smash;
  animation-duration: ${SMASH_MS}ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
`;


const SFXContext = React.createContext({
    smash: () => {},
  });
  
  const SFX = ({ children }) => {
    const [isSmashing, setIsSmashing] = React.useState(false);
  
    const smash = React.useCallback(() => {
      setIsSmashing(true);
    }, []);
  
    React.useEffect(() => {
      if (isSmashing) {
        setTimeout(() => {
          setIsSmashing(false);
        }, SMASH_MS);
      }
    }, [isSmashing]);
  
    return (
      <SFXContext.Provider value={{ smash }}>
        <div className={cx(isSmashing && smashStyles)}>{children}</div>
      </SFXContext.Provider>
    );
  };
  