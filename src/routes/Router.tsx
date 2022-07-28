import { BrowserRouter, Route, Routes } from "react-router-dom";

import Coin from "./Coin";
import Coins from "./Coins";

// interface IRouterProps {
//     toggleDark: () => void;
//     isDark: boolean;
//     //함수 리턴 타입 : 결과 값을 반환하지 않는 함수에 설정 
// }

function Router () {

 
    return (
        <BrowserRouter>
        <Routes>
            {/* <Route path="/:coinId" element={<Coin isDark={isDark} />} />
            <Route path="/" element={<Coins toggleDark={toggleDark}/>} /> */}
            <Route path="/:coinId" element={<Coin />} />
            <Route path="/" element={<Coins />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;