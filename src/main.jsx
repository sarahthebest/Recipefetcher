import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { purple, grey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
      dark: grey[200],
    },
    secondary: {
      main: purple[100],
    },
  },
  spacing: 6,
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
