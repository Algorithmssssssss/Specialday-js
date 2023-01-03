import React, { useRef } from "react";
import { CharWrapper, WindupChildren, Linebreaker } from "windups";
import { css } from "linaria";
import { GREEN, PINK } from "/src/colours.js";
import useComponentSize from "@rehooks/component-size";

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
  animation-duration: 150ms;
  display: inline-block;
`;

const SpeechBubbleChar = ({ children }) => {
  return <span className={chatChar}>{children}</span>;
};


const greenBubble = css`
  font-family: "Menlo", monospace;
  padding: 12px;
  color: white;
  border-radius: 3px;
  background-color: ${GREEN};
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
    </div>
  );
};

const pinkBubble = css`
  font-family: "Menlo", monospace;
  padding: 12px;
  color: black;
  border-radius: 3px;
  background-color: ${PINK};
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
    <Linebreaker
    width={width} fontStyle={'24px "Menlo", monospace'}>
    <div className={rootStyle} ref={ref}>
      <WindupChildren onFinished={onFinished}>
        <div className={pinkBubble}>
          <CharWrapper element={SpeechBubbleChar}>{text}</CharWrapper>
        </div>
      </WindupChildren>
    </div>
  </Linebreaker>
);
};

const chatRoot = css`
display: flex;
flex-direction: column;
max-width: 50em;
`;


const Chat = ({ onFinished }) => {
const [linesToShow, setLinesToShow] = React.useState(1);

const messages = [
  {
    speaker: "A",
    text: "Hello!",
    time: "10:00"
  },
  {
    speaker: "B",
    text: "Hi there! How are you doing?",
    time: "10:01"
  },
  {
    speaker: "A",
    text: "I'm doing well, thanks for asking! How about you?",
    time: "10:02"
  },
  {
    speaker: "B",
    text: "I'm doing great as well, thanks! Do you want to grab a coffee?",
    time: "10:03"
  },
  {
    speaker: "A",
    text: "Sure, that sounds great!",
    time: "10:04"
  }
];

return (
  <div className={chatRoot}>
    {messages.slice(0, linesToShow).map((message, index) => {
      if (message.speaker === "A") {
        return (
          <SpeechBubbleA
            key={index}
            text={message.text}
            onFinished={() => {
              setLinesToShow(linesToShow + 1);
            }}
          />
        );
      } else {
        return (
          <SpeechBubbleB
            key={index}
            text={message.text}
            onFinished={() => {
              setLinesToShow(linesToShow + 1);
            }}
          />
        );
      }
    })}
  </div>
);
};

export default Chat;
