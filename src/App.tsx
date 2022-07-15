import React from 'react';
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
      body {
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 20px;
      font-weight: 300;
      background-color:${props => props.theme.bgColor};
      color:${props => props.theme.textColor};
      line-height: 1.2;
    }
    a {
      text-decoration: none;
      color: inherit;
      /* inherit 부모 색깔 받아옴 */
    }

`
 
 

 
function App() {
 
 
  return (
    <>

    <GlobalStyle/>
    <Router/>
    </>
    
 
   )
}


export default App;
