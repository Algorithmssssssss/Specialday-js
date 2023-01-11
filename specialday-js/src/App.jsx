import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useWindupString, WindupChildren, Pace } from "windups";
import './wishes.css';

export default function App() {
  return (
    <Routes>
      <Route path="wishes" element={<Wishes />} />
    </Routes>
  );
}



const Wishes = () => {
  const [text] = useWindupString(
    "Happy Birthday, my love! I hope you have a wonderful day",
    {
      pace: (char) => (char === " " ? 500 : 40),
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
      <div className="App">
        <div className="App-header">
          <h1>{text}</h1>
          <WindupChildren>
            {"Hi my "}
            <span style={{ color: "red" }}>{"love "}</span>
            {"I love you"}
            <Pace ms={100}>{" G-R-O-U-N-D-E-D."}</Pace>
          </WindupChildren>
        </div>
      </div>
     
    </>
  );
};
