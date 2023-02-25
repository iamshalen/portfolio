import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeScript } from "@chakra-ui/react";
import './index.css';
import App from './App';
import theme from "./theme";
import reportWebVitals from './reportWebVitals';
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
