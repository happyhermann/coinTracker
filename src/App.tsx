import React from 'react';
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
      body {
      font-family: sans-serif;
       font-size: 30px;
      background-color:${props => props.theme.bgColor};
      color:${props => props.theme.textColor}
 
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
