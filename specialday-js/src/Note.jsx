import React, { useRef, useState, useEffect } from "react";
import { CharWrapper, WindupChildren, Linebreaker, Effect } from "windups";
import { css } from "linaria";
import useComponentSize from "@rehooks/component-size";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import img1 from "/src/images/1.png";
import img2 from "/src/images/2.png";
import img4 from "/src/images/4.png";
import img5 from "/src/images/5.png";
import img6 from "/src/images/6.png";

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
  right: 0;
`;

const imgBubble = css`
  font-family: "Menlo", monospace;
  padding: 1px;
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

const imgStyle = css`
  width: 50%;
  height: auto;
  max-width: 50%;
`;

export const SpeechBubbleC = ({ picture, onFinished }) => {
  const ref = useRef(null);
  // const { width } = useComponentSize(ref);
  const [width25, setWidth25] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = picture;
    img.onload = () => {
      setWidth25(img.naturalWidth * 0.25);
    };
  }, [picture]);

  return (
    // <div className={rootStyle} ref={ref}>
    //     <div className={imgBubble} onFinished={onFinished}>
    //
    //     </div>
    // </div>
    <Linebreaker width={width25} fontStyle={'24px "Menlo", monospace'}>
      <div className={rootStyle} ref={ref}>
        <WindupChildren onFinished={onFinished}>
          <div className={imgBubble}>
            <img src={picture} className={imgStyle} />
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

const Chat2 = ({ onFinished }) => {
  const [linesToShow, setLinesToShow] = useState(1);
  const { width, height } = useWindowSize();
  const [windOn, setWindOn] = useState(0);

  const setLines = (num) => {
    setTimeout(() => {
      setLinesToShow(num);
    }, 1100);
  };

  return (
    <div className={chatRoot}>
      <Confetti width={width} height={height * 3.5} wind={windOn} />
      <SpeechBubbleA
        text={"Here comes my wishes to you my love <3"}
        onFinished={() => setLines(2)}
      />
      <div></div>
      {linesToShow >= 2 && (
        <SpeechBubbleB
          text={
            "It's finally the 23rd, your birthdayyyy!!"
          }
          onFinished={() => setLines(3)}
        />
      )}
      {linesToShow >= 3 && (
        <SpeechBubbleB
          text={
            "Happy birthday honey!, I wish for you to be happy because you deserve the whole world as well."
          }
          onFinished={() => setLines(4)}
        />
      )}
      {linesToShow >= 4 && (
        <SpeechBubbleB
          text={"I hope everthing is going well for you with your uni work."}
          onFinished={() =>
            setTimeout(() => {
              setLines(5);
            }, 250)
          }
        />
      )}
      {linesToShow >= 5 && (
        <SpeechBubbleB
          text={
            "I am beyond proud of you, for all the hard work that you put in"
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(6);
            }, 250)
          }
        />
      )}

      {linesToShow >= 6 && (
        <SpeechBubbleB
          text={
            "and you should also be proud of yourself as well, you really do deserve everything my love."
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(7);
            }, 250)
          }
        />
      )}
      {linesToShow >= 7 && (
        <SpeechBubbleB
          text={
            "I think this color is a bit hard to read. I am bad with colors, love HAHAHA"
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(8);
            }, 250)
          }
        />
      )}
      {linesToShow >= 8 && (
        <SpeechBubbleA
          text={"So let me switch to the other side"}
          onFinished={() =>
            setTimeout(() => {
              setLines(9);
            }, 250)
          }
        />
      )}
      {linesToShow >= 9 && (
        <SpeechBubbleA
          text={
            "I hope your prototype is going well, and that everything that you wish for would come true."
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(10);
            }, 250)
          }
        />
      )}
      {linesToShow >= 10 && (
        <SpeechBubbleA
          text={
            "I am so glad I could spend this day with you. You truly are my favorite person."
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(11);
            }, 250)
          }
        />
      )}
      {linesToShow >= 11 && (
        <SpeechBubbleA
          text={"So let this be your special day my love <3"}
          onFinished={() =>
            setTimeout(() => {
              setLines(12);
            }, 250)
          }
        />
      )}
      {linesToShow >= 12 && (
        <SpeechBubbleA
          text={
            "As you could probably tell, the songs are all from your favorite artist, ZACKKK"
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(13);
            }, 250)
          }
        />
      )}
      {linesToShow >= 13 && (
        <SpeechBubbleA
          text={
            "I added that last one in because, it's in one of your favorite show, BROOKLYN NINE NINE"
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(14);
            }, 250)
          }
        />
      )}
      {linesToShow >= 14 && (
        <SpeechBubbleA
          text={
            "I don't think you knew, but I have been listening to Pano on repeat while debugging this website"
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(15);
            }, 250)
          }
        />
      )}
      {linesToShow >= 15 && (
        <SpeechBubbleA
          text={"For the past few days HAHAHAHA"}
          onFinished={() =>
            setTimeout(() => {
              setLines(16);
            }, 250)
          }
        />
      )}
      {linesToShow >= 16 && (
        <SpeechBubbleA
          text={
            "I hope you like this, and that it doesn't make your eyes hurt too much"
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(17);
            }, 250)
          }
        />
      )}
      {linesToShow >= 17 && (
        <SpeechBubbleA
          text={"From trying to read the words"}
          onFinished={() =>
            setTimeout(() => {
              setLines(18);
            }, 250)
          }
        />
      )}
      {linesToShow >= 18 && (
        <SpeechBubbleA
          text={"Now it's time to add some pictures :3"}
          onFinished={() =>
            setTimeout(() => {
              setLines(19);
            }, 250)
          }
        />
      )}
      {linesToShow >= 19 && (
        <SpeechBubbleA
          text={"Even when you are outside, all windy"}
          onFinished={() =>
            setTimeout(() => {
              setLines(20);
            }, 250)
          }
        />
      )}
      {linesToShow >= 20 && (
        <SpeechBubbleA
          text={"You are still beautiful."}
          onFinished={() =>
            setTimeout(() => {
              setLines(21);
            }, 250)
          }
        />
      )}
      {linesToShow >= 21 && (
        <SpeechBubbleC picture={img6} onFinished={() => setLines(22)} />
      )}
      {linesToShow >= 22 && (
        <SpeechBubbleA
          text={
            "Wait, the confetti is too much, let me blow it out for you, honey"
          }
          onFinished={() =>
            setTimeout(() => {
              setWindOn(0.07);
              setLines(23);
            }, 250)
          }
        />
      )}
      {linesToShow >= 23 && (
        <SpeechBubbleA
          text={"Even when you are trying to show me your glass sculpture"}
          onFinished={() =>
            setTimeout(() => {
              setLines(24);
            }, 250)
          }
        />
      )}
      {linesToShow >= 24 && (
        <SpeechBubbleC picture={img1} onFinished={() => setLines(26)} />
      )}
      {linesToShow >= 26 && (
        <SpeechBubbleA
          text={"You are so adorableee"}
          onFinished={() =>
            setTimeout(() => {
              setLines(27);
            }, 250)
          }
        />
      )}
      {linesToShow >= 27 && (
        <SpeechBubbleA
          text={"You are so adorableee, and you should know that."}
          onFinished={() =>
            setTimeout(() => {
              setLines(28);
            }, 250)
          }
        />
      )}
      {linesToShow >= 28 && (
        <SpeechBubbleA
          text={"Just look at thissss"}
          onFinished={() =>
            setTimeout(() => {
              setLines(29);
            }, 250)
          }
        />
      )}
      {linesToShow >= 29 && (
        <SpeechBubbleC picture={img2} onFinished={() => setLines(30)} />
      )}
      {linesToShow >= 30 && (
        <SpeechBubbleA
          text={"I am dumping all your pictures here hehehe"}
          onFinished={() =>
            setTimeout(() => {
              setLines(31);
            }, 250)
          }
        />
      )}
      {linesToShow >= 31 && (
        <SpeechBubbleA
          text={
            "Because I gatekeep these and only I can see it, and you of course"
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(32);
            }, 250)
          }
        />
      )}
      {linesToShow >= 32 && (
        <SpeechBubbleC picture={img4} onFinished={() => setLines(33)} />
      )}
      {linesToShow >= 33 && (
        <SpeechBubbleC picture={img5} onFinished={() => setLines(34)} />
      )}
      {linesToShow >= 34 && (
        <SpeechBubbleA
          text={"But yes my love, I know this is a lot of lines to read"}
          onFinished={() =>
            setTimeout(() => {
              setLines(35);
            }, 250)
          }
        />
      )}
      {linesToShow >= 35 && (
        <SpeechBubbleA
          text={
            "I hope it's going to be a great birthdate for you, you are one year from being legal"
          }
          onFinished={() =>
            setTimeout(() => {
              setLines(36);
            }, 250)
          }
        />
      )}
      {linesToShow >= 36 && (
        <SpeechBubbleA
          text={"To drink in the US"}
          onFinished={() =>
            setTimeout(() => {
              setLines(37);
            }, 250)
          }
        />
      )}
      {linesToShow >= 37 && (
        <SpeechBubbleA
          text={"So once again, happy birthday my love"}
          onFinished={() =>
            setTimeout(() => {
              setLines(38);
            }, 250)
          }
        />
      )}
      {linesToShow >= 38 && (
        <SpeechBubbleA
          text={"You mean so much to me, you already know that, and"}
          onFinished={() =>
            setTimeout(() => {
              setLines(39);
            }, 250)
          }
        />
      )}
      {linesToShow >= 39 && (
        <SpeechBubbleA
          text={"I love you so so muchh, my favorite person <3"}
          onFinished={() =>
            setTimeout(() => {
              setLines(40);
            }, 250)
          }
        />
      )}

      {linesToShow >= 40 && (
        <SpeechBubbleB
          text={"Oh, and the wind stops now, so the confetti is backkk hehe"}
          onFinished={() =>
            setTimeout(() => {
              setWindOn(0);
              onFinished();
            }, 700)
          }
        />
      )}
    </div>
  );
};

export default Chat2;
