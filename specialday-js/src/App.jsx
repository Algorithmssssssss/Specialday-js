import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useWindupString } from "windups";

export default function App() {
  return (
    <Routes>
      <Route path="wishes" element={<Wishes />} />
    </Routes>
  );
}

const Wishes = () => {
  const [text] = useWindupString(
    "This club admits only those wearing bright pink hats."
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
          hello
        </div>
      </div>
    </>
  );
};
