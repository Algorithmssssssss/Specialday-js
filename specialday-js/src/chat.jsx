import React, { useRef, useState } from "react";
import { CharWrapper, WindupChildren, Linebreaker, Effect } from "windups";
import { css } from "linaria";
import useComponentSize from "@rehooks/component-size";
import Pet from "./pet";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import Chat2 from "./Note";
import "./button1.css";

const chatChar = css`
  @keyframes enter {
    from {
      opacity: 0;
      transform: scale(0.1) rotate(-180deg) translateY(-100%);
    }
    to {
      opacity: 1;
      transform: scale(1) rotate(0deg) translateY(0);
    }
  }
  animation-name: enter;
  animation-duration: 600ms;
  display: inline-block;
`;

const SpeechBubbleChar = ({ children }) => {
  return <span className={chatChar}>{children}</span>;
};

const greenBubble = css`
  font-family: "Menlo", monospace;
  padding: 10px;
  color: white;
  border-radius: 31px;
  background-color: pink;
  transform: skew(-5deg, -3deg);
  display: inline-block;
  white-space: pre-wrap;
  font-size: 24px;
  align-self: flex-start;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.05);
`;

export const SpeechBubbleA = ({ text, onFinished }) => {
  const ref = useRef(null);
  const { width } = useComponentSize(ref);

  return (
    <div className={rootStyle} ref={ref}>
      <Linebreaker width={width} fontStyle={'24px "Menlo", monospace'}>
        <WindupChildren onFinished={onFinished}>
          <div className={greenBubble}>
            <CharWrapper element={SpeechBubbleChar}>{text}</CharWrapper>
          </div>
        </WindupChildren>
      </Linebreaker>
      <div></div>
    </div>
  );
};

const pinkBubble = css`
  font-family: "Menlo", monospace;
  padding: 10px;
  color: white;
  border-radius: 31px;
  background-color: purple;
  transform: skew(5deg, 3deg);
  display: inline-block;
  white-space: pre;
  font-size: 24px;
  align-self: flex-end;
  box-shadow: -2px 2px 7px rgba(0, 0, 0, 0.05);
`;

const rootStyle = css`
  display: flex;
  flex-direction: column;
`;

export const SpeechBubbleB = ({ text, onFinished }) => {
  const ref = useRef(null);
  const { width } = useComponentSize(ref);

  return (
    <Linebreaker width={width} fontStyle={'24px "Menlo", monospace'}>
      <div className={rootStyle} ref={ref}>
        <WindupChildren onFinished={onFinished}>
          <div className={pinkBubble}>
            <CharWrapper element={SpeechBubbleChar}>{text}</CharWrapper>
          </div>
        </WindupChildren>
      </div>
      <div></div>
    </Linebreaker>
  );
};

const chatRoot = css`
  display: flex;
  flex-direction: column;
  max-width: 50em;
`;

const petRoot = css`
  position: absolute;
  bottom: 0;
`;

const Chat = ({ onFinished }) => {
  const [linesToShow, setLinesToShow] = useState(1);
  const [pet, setPet] = useState(false);
  const { width, height } = useWindowSize();
  const [showChat2, setShowChat2] = useState(false);
  const [recycleConfetti, setRecycleConfetti] = useState(true);

  const [showButton, setShowButton] = useState(false);

  function handleClick() {
    setShowButton(false);
    setShowChat2(true);
  }

  console.log("Show chat", showChat2);
  console.log("Show button", showButton);

  const setLines = (num) => {
    setTimeout(() => {
      setLinesToShow(num);
    }, 1100);
  };

  return (
    <div className={chatRoot} onFinished={() => setShowButton(true)}>
      <div id="firstChat">
        <Confetti
          id="confetti"
          numberOfPieces={200}
          tweenDuration={5000}
          recycle={recycleConfetti}
        />
        <SpeechBubbleA text={"Give me hint"} onFinished={() => setLines(2)} />
        <div></div>
        {linesToShow >= 2 && (
          <SpeechBubbleB
            text={"You can interact with it"}
            onFinished={() => setLines(3)}
          />
        )}
        {linesToShow >= 3 && (
          <SpeechBubbleA
            text={"Are u going to code me a little dog?"}
            onFinished={() => setLines(4)}
          />
        )}
        {linesToShow >= 4 && (
          <SpeechBubbleB text={"Yes my love."} onFinished={() => setLines(5)} />
        )}
        {linesToShow >= 5 && (
          <SpeechBubbleB
            text={"I did code you a little pet dog hehehe"}
            onFinished={() =>
              setTimeout(() => {
                setPet(true);
                setRecycleConfetti(false);
                setTimeout(() => {
                  setShowButton(true);
                }, 700);
              }, 800)
            }
          />
        )}
      </div>
      <div>
        {pet && (
          <div className="petRoot">
            <Pet onFinished={() => setShowButton(true)} />
          </div>
        )}

        {showButton && (
          <div>
            <button className="big-button" onClick={handleClick}>
              {"Now it's time for my wishes"}
            </button>
          </div>
        )}

        {showChat2 && (
          <div>
            <Chat2 />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
