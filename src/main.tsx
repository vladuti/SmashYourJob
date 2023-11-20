import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import CV from "./components/CVGenerator";
import "bootstrap/dist/css/bootstrap.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>
);
