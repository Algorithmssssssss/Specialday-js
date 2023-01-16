import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useWindupString, WindupChildren, Pace } from "windups";
import "./wishes.css";
import Typical from "react-typical";
import Bubble from "./textbub.jsx";
import SpotifyPlayer from "react-spotify-web-playback";

export default function App() {
  return (
    <Routes>
      <Route path="wishes" element={<Wishes />} />
    </Routes>
  );
}

const Wishes = () => {
  const [text] = useWindupString(
    "Happy Birthday, my love <3",
    {
      pace: (char) => (char === " " ? 100 : 100),
    }
  );

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
    autoPlay= {true}
        token="BQD2ET_M2cI2TmmY7rejNBg4IlM8aezwPZIcWT4do0iacwHrWDTbHN9snC-fGYplGMOVNr0ppdbsowGw6dy9Jj7fNhMt7uPC8WLjW_a3eAPbvFu3gwxgFaaGLUmefNBe6wiLP0kaSD_R24H-Ea_eprMw8t2YwgyMs9ccSTtl6Y3uKNQydCRc72UoyS-8eZIIhy_-oOxfbl8UcK0kKrqBWW3-OCeXwqtTzQokj8027HUutyh3MA"
        uris={["spotify:playlist:1rNoE1HmIBqLWJhVlIQDp2"]}
        
        initialVolume={0.1}

        styles={{
          activeColor: '#fff',
          bgColor: 'rgb(229, 149, 149)',
          color: '#fff',
          loaderColor: '#fff',
          sliderColor: '#E362A7',
          sliderHandleColor: '#6F2D76',
          trackArtistColor: '#fff',
          trackNameColor: '#fff',
        }}

        
      />
    </div>
      
      <div className="App">
        <div className="App-header">
          <h1>{text}</h1>
          <WindupChildren>
            {"Hi my "}
            <span style={{ color: "red" }}>{"love "}</span>
            {"I love you"}
          </WindupChildren>
        </div>
        <WindupChildren>
          <Pace ms={100}>
            {
              "It is your birthday! Would you look at that, this is a cool website right love ? XD"
            }
          </Pace>
        </WindupChildren>

      </div>
    </>
  );
};
