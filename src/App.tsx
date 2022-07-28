import React  from 'react';
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atom';
 
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
  // const [isDark, setIsDark] = useState(false)
  // const toggleDark = () => setIsDark(current => !current)
  // isDark가 true면 false를 return, false면 true를 return
  const isDark = useRecoilValue(isDarkAtom)
  
  
  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}> 
      <GlobalStyle/>
      {/* <Router isDark={isDark} toggleDark={toggleDark}/> */}
      <Router />
    </ThemeProvider>

    </>
    
 
   )
}


//global state의 긴 여행

// App (isDark, modifierFn)
// => Router => Coins => (modifier)
// => Router => Coin => Chart (isDark)

//*문제는 절차가 까다롭다는 것, 직접 모든 곳으로 공유해야한다는 것이다.

//##이럴때 state management를 사용하면 어떨까? redux, recoil


export default App;
