import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useWindupString, WindupChildren, Pace } from "windups";
import "./wishes.css";
import Pet from "./pet";

import SpotifyPlayer from "react-spotify-web-playback";
import Chat from "./chat";
import { css } from "linaria";


export default function App() {
  return (
    <Routes>
      <Route path="wishes" element={[<Wishes />]} />
    </Routes>
  );
}

const NextButtonStyles = css`
  @keyframes drift {
    100% {
      background-position: 111px 73px;
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: drift, fade-in;
  animation-duration: 5s, 100ms;
  animation-iteration-count: infinite, 1;
  animation-timing-function: linear;
  display: inline-block;
  height: 48px;
  border-radius: 5px;
  border: 2px solid #616161;
  background-image: url("./src/topography.svg");
  background-color: lightgrey;
  width: 10%;
  font-size: 1em;
  font-family: "Menlo", monospace;
  margin-top: 16px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.05);
  transition: transform 200ms;
  appearance: none;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    color: green;
    border-color: green;
  }
`;



const Wishes = () => {
  const [text] = useWindupString("Happy Birthday, my love <3", {
    pace: (char) => (char === " " ? 100 : 100),
  });

  const [showButton, setShowButton] = useState(false);
  const [chatDone, setChatDone] = useState(true);

function handleClick() {
  setShowButton(true);
}

function handleChatDone() {
  setChatDone(false);
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
          token="BQA0MF70W4pGQS1eJIXP77wDtL5fSApfTC5mbMjMPT3mhde5YhA8mpaXGlFfhuwI4EHQ9No8GsjljD31YNSZj4W13stm987mIj5CKA5YQl4iZE8TMn-Ac7sxVD-vVzfCSN_u7JUpVRuB3WQMqdEIdXWyn88x4d04JHu5-CR0Jp6YWtt-FcUHnGyXqBalFxGGxD-lVixkfW89gFuXsExe-q62pKVKtjxW9qyzYNr6cRdfbfUJ2Q"
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
          <h1>{text}</h1>
          {/* <WindupChildren>
            {"Hi my "}
            <span style={{ color: "red" }}>{"love "}</span>
            {"I love you"}
          </WindupChildren> */}
        </div>
        {/* <WindupChildren>
          <Pace ms={100}>
            {
              "It is your birthday! Would you look at that, this is a cool website right love ? XD"
            }
          </Pace>
        </WindupChildren> */}
      </div>
      <Chat onDone={handleChatDone} />
      {showButton ? <div className={NextButtonStyles}>
        <button onClick={handleClick}>
          {"Next"}
        </button>
      </div> : <Pet />}

      
    </>
  );
};
