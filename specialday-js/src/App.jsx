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
  const [text] = useWindupString("Happy Birthday, my Cawlynnn <3", {
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
          token="BQD3-qeTQBO16YAyvVg3amnOK8UvLOblcNJ3chcfFL2yYmohbCEs3fV-OPkRs0Av0egpd0NvqO14IqwqOD0ocDIMTJEmVgkLkS1-Nhp-Httlikb9GToYYl4MxsIdu5l-7s4RFIvhCsfqdMnx6h5tO3fKoWZ_qCxXuHKK3AbZEFLRxX8F7w6TshgcAAo7NT14Xn7L-gKFaNKNCMHOKlr3UQsqEkSqPd5akf3a_YRNMBfRY6bmWA"
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
