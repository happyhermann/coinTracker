import React from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom"

import styled from "styled-components";
import Progress from "../components/Progress";


const Container = styled.div`
padding:0px 20px;
max-width: 480px;
margin: 0 auto;

`;

const Header = styled.header`
text-align: center;
   `;

const Title = styled.h1`
font-size: 40px;
margin-bottom: 25px;
color:${props => props.theme.accentColor}; 
`;


const Loader = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    display: block;
    opacity: 0.7;
`

interface LocationState {
    state: {
        name: string;
     }
}
 

 

function Coin () {   
    const [loading, setLoading] = useState(true);
     const {coinId} = useParams();
     console.log(coinId);
     const {state} = useLocation() as LocationState;
     console.log(state.name)
    //  location은 useLocation으로 온 객체 전체를 받는 것 (location.state)가 name받는 것
    // => {state} 비구조화 할당으로 받으면 객체안에 있는 state만 빼올 수 있음

    // usePrarms 네가 URL에서 관심 있어 하는 정보를 잡아낼 수 있게 해주는 것 
    // {비구조할당} 객체내 특정 요소 바로 접근



    // * useLocation으로 받아오는 것이 그래서 왜 좋으냐? 
    // 타이틀에 coin의 name을 직접 뿌려줄 수 있다는 것
    return  (
        <Container>
            <Header>
                <Title>{state?.name || "Loading"}</Title>
                {/* state가 존재하면 name을 가져오고, 아니면 loading을 가져와라 */}
                {/* 시크릿 모드에서 상세화면 URl을 바로 치고 들어오면 Loading 화면만 보게 될 것
                  Home 화면을 통해서 들어온다면, 클릭을 통해 생성된 state를 볼 수 있을 것

                내가 이해한 바, 여기 Coin 각각의 상세 페이지에 들어가는데 있어서, 
                기존에는 api를 그때마다 파라미터를 통해 호출하는 방식으로 진행을 하였었는데,
                그것은 속도가 느려질 가능성이 있음 
                => 그래서 location와 state를 이용해서 이미 받아온 데이터들을 (fetch할때 state에 받아온)
                그대로 link에 있는 state props로 쏴서 뿌리는 것
                시크릿 모드로 들어가면 그래서 데이터가 바인딩 되지 않았던 것, 
                왜냐하면 반드시 Home화면에서의 클릭을 통해 state 값이 전달되기 때문이다
                
                */}
            </Header>
            {loading ? 
            (<Loader> 
                <Progress/>
             </Loader> )
            : null}
        </Container>
    )
}

export default Coin;