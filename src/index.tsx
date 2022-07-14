import React from 'react';
import ReactDOM from 'react-dom/client';
 import App from './App';
import { Reset } from "styled-reset";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Helmet } from 'react-helmet';
  

 
  
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
  <Helmet> <title>리액트마스터</title></Helmet>

    <Reset/>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
   </React.StrictMode>
);

 