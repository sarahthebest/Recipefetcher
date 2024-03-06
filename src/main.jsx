import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { purple, grey} from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Recipes from './component/Recipes.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
      dark: grey[200]
    },
    secondary: {
      main: purple[100],
    }
  },
  spacing: 6,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "recipes",
        element: <Recipes />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
