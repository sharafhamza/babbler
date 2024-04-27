import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "../src/theme";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import "./db/firebaseConfig ";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
