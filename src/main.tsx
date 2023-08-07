import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RegionProvider } from "./context/RegionStore.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RegionProvider>
      <App />
    </RegionProvider>
  </React.StrictMode>
);
