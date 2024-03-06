import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Navbar from './Navbar.jsx';
import { pink, blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: blue[200],
    }
  },
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Navbar />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
