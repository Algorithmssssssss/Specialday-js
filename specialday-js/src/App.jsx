import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useWindupString, WindupChildren, Pace } from "windups";
import "./wishes.css";
import Pet from "./pet";
import Picture from "./picture";
import useWindowSize from 'react-use/lib/useWindowSize';
import SpotifyPlayer from "react-spotify-web-playback";
import Chat from "./chat";
import { css } from "linaria";
import Confetti from 'react-confetti';
import "./glowingbutton.css";

export default function App() {
  return (
    <Routes>
      <Route path="wishes" element={[<Wishes />]} />
    </Routes>
  );
}

// const NextButtonStyles = css`
//   @keyframes drift {
//     100% {
//       background-position: 111px 73px;
//     }
//   }
//   @keyframes fade-in {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
//   animation-name: drift, fade-in;
//   animation-duration: 5s, 100ms;
//   animation-iteration-count: infinite, 1;
//   animation-timing-function: linear;
//   display: inline-block;
//   height: 48px;
//   border-radius: 5px;
//   border: 2px solid #616161;
//   background-image: url("./src/topography.svg");
//   background-color: lightgrey;
//   width: 10%;
//   font-size: 1em;
//   font-family: "Menlo", monospace;
//   margin-top: 16px;
//   box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.05);
//   transition: transform 200ms;
//   appearance: none;

//   &:hover {
//     transform: scale(1.02);
//   }

//   &:active {
//     transform: scale(0.98);
//   }

//   &:focus {
//     color: green;
//     border-color: green;
//   }
// `;

const Wishes = () => {
  const [text] = useWindupString("Happy Birthday, my love <3", {
    pace: (char) => (char === " " ? 100 : 100),
  });

  const [showButton, setShowButton] = useState(true);
  const [showButton2, setShowButton2] = useState(true);
  const [chatDone, setChatDone] = useState(false);
  const [chatCompleted, setChatCompleted] = useState(false);
  const { width, height } = useWindowSize()

  function handleClick() {
    setShowButton(false);
    setChatCompleted(true);
  }

  function handleClick2() {
    setShowButton2(false);
  }

  function handleChatDone() {
    setChatDone(true);
  }

  

  React.useEffect(() => {
    const el = document.getElementById("container");
    if (el) {
      el.remove();
    }
  }, []);

    return (
    <>
      <div className="Spotify">
        <SpotifyPlayer
          name="Her special website"
          autoPlay={true}
          token="BQDEZajPciuzdBdgxtLOR2kZdmi_ki-AHTbfz-8vahVWn-jd2bDyvAz4-eaI1zBF35JV6n1BpVRv7XrtXv_OPBek0ZLyRH3RG9MwI46s3O3Bmj3QGQZjwvgOzmUerFBf0nZJrfb1KKXaKTu9u9qrVskqEnm98bOdD_91sLy-bOlx6fQCRSh06ZCB6tK7xKvL1nsSm_XPXRN_e3oO0vrNAFMo-hgHFcbchYTVwiQ3pDzBtlaz1Q"
          uris={["spotify:playlist:1rNoE1HmIBqLWJhVlIQDp2"]}
          initialVolume={0.1}
          styles={{
            activeColor: "#fff",
            bgColor: "rgb(229, 149, 149)",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#E362A7",
            sliderHandleColor: "#6F2D76",
            trackArtistColor: "#fff",
            trackNameColor: "#fff",
          }}
        />
      </div>

      <div className="App">
        <div className="App-header">
        <Confetti
      width={width}
      height={height}
      numberOfPieces={200}
      tweenDuration = {1000}
    />
          <h1>{text}</h1>
        </div>
      </div>

      {/* <Chat onComplete={() => setChatCompleted(true)} /> */}

      {showButton ? (
        <div>
          <button onClick={handleClick}>{"Next"}</button>
        </div>
      ) : (
        <Chat />
      )}
      {/* {chatCompleted ? (
      <div>
        <button onClick={handleClick2}>{"Next"}</button>
      </div>
    ) : (
      <Picture />
    )} */}
    </>
  );
};
