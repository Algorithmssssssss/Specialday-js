import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Note from "./Note";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Note />
    </BrowserRouter>
  </React.StrictMode>
);
