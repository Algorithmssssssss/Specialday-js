import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useWindupString, WindupChildren, Pace } from "windups";
import "./wishes.css";
import SpotifyPlayer from "react-spotify-web-playback";
import Chat from "./chat";

import "./button1.css";

export default function App() {
  return (
    <Routes>
      <Route path="wishes" element={[<Wishes />]} />
    </Routes>
  );
}

const Wishes = () => {
  const [text] = useWindupString("Happy Birthday, my love <3", {
    pace: (char) => (char === " " ? 100 : 100),
  });

  const [showButton, setShowButton] = useState(true);

  function handleClick() {
    setShowButton(false);
    setChatCompleted(true);
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
            token="BQDcDWA43w635etVhnPckeCwocDwA7nwLV8G1fTvIUxpyBpZRjOyLFfkChRFTQsD7heic1UjnCfWKyrVU885LpJ45EnWCJwQBDfspCsBgmOhp2HzXaO1bbAqujW4CzvS6WUxRzTe8eay7tcJX824H8CA0AQ2AmRKlXzJJoQhsVb8X3k_jLFEjGOWA2uNPrcg-cZ0z_jRstPe5muZXbEhN2O246itOgoTzBLIa9IiT0fmgl8zbw"
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
          </div>
        </div>

        {showButton ? (
          <div>
            <button className="big-button" onClick={handleClick}>
              {"Read Our Chat"}
            </button>
          </div>
        ) : (
          <Chat />
        )}
    </>
  );
};
