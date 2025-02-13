import React from "react";
import ReactDOM from "react-dom/client";
import StoicQuotesGenerator from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <StoicQuotesGenerator />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con id 'root'");
}
