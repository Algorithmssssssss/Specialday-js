import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useWindupString, WindupChildren, Pace } from "windups";
import "./wishes.css";
import Pet from "./pet";
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyLogin from "./token";
import Chat from "./chat";

export default function App() {
  return (
    <Routes>
      <Route path="wishes" element={[<Wishes />, <Chat />, <Pet />]} />
    </Routes>
  );
}

const Wishes = () => {
  const [text] = useWindupString("Happy Birthday, my love <3", {
    pace: (char) => (char === " " ? 100 : 100),
  });

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
          token="BQBQ_F2n0zWiyQTOy012nTHa51Ppv21QqsFyHj7yyie-w1ON0dMdyX0Wdk7KYfxnejSn4qnQbuAvdud2UgHL4fDw9tp7LPvHahIANu4eGt2yGMjNbZCFz_IS5gufiLGYdOp-sTOWgo7Bhxu51L3VCoZ2G2c0Dxx054N9eGZ67Q7dqA82QT4JH0VR7Wom9x7cg-IQ5fCGTCy-tk-5Bxx1stSSLxk5F0N0vV61IimKl7I92LKRbg"
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
