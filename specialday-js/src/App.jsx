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
            token="BQCKNjLYz6PIK37QBLb8Spxj-joaKHlY4TczQUzMVliG2VBZpPacmwgTFQeewJ916rJZH0M4lrbaThTDZSYYuHRw13OPYCHrClCTsWUkH-visvFRUqEa-URxuHDm9Ti5GD3xb8bZICxxzGWBY0i63He_DpN1JLPCz_vnar88gtUUeHSXji1--ReCKE8bt_oCbNy4_YvYG9zB5_zJ_w0eShJKDCU7vaTeEsnODhw2WrP56tDhqQ"
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
