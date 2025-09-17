import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/All.css"; // sekarang semua style global di sini

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
