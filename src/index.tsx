import React from 'react';
import ReactDOM from 'react-dom/client';
 import App from './App';
import { Reset } from "styled-reset";
import { Helmet } from 'react-helmet';

//Recoil
import { RecoilRoot } from 'recoil';
  

 
  
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
  <Helmet> <title>코인</title></Helmet>
    <RecoilRoot>
      <Reset/>
      <App />
    </RecoilRoot>
    </React.StrictMode>
);

 