import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

import Progress from "../components/Progress";


//  코인이 어떻게 생겼는지 타입스크립트에게 말할 수 있다
 
const Container = styled.div`
padding:0px 20px;
max-width: 480px;
margin: 0 auto;

`;

const Header = styled.header`
text-align: center;
   `;

const CoinList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 10px;
 
    a {
        display: flex;
        align-items: center;
    }   
    &:hover {
        a {    
            transition: color 0.2s ease-in;
             color: ${(props) => props.theme.accentColor};
        }
    }
`;


const Title = styled.h1`
font-size: 40px;
margin-bottom: 25px;
color:${props => props.theme.accentColor}; 
`;




const Loader = styled.div`
    text-align: center;
    display: block;
    opacity: 0.7;
`

 
    
const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

const coins = [
    {
      id: "btc-bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "eth-ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "hex-hex",
      name: "HEX",
      symbol: "HEX",
      rank: 3,
      is_new: false,
      is_active: true,
      type: "token",
    },
  ];

  interface CoinInterface {
      id: string,
      name: string,
      symbol: string,
      rank: number,
      is_new: boolean,
      is_active: boolean,
      type: string,
  }

function Coins () {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    // 받아온 api data를 받는 useState
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async() => {
           const response = await fetch("https://api.coinpaprika.com/v1/coins");
           const json = await response.json();
           setCoins(json.slice(0,100))
          //array를 자르는 slice로 data 객체 100개까지만 받아오기  
          setTimeout(()=> {
            setLoading(false)

          },1000)
          //state안에 코인이 다 세팅되면 Loading을 false로 바꿈
         })();
        // 즉시 실행되는 함수
     
    }, []);
    console.log(coins)

    // component life가 처음 시작될 때 한번만 실행되게 useEffect 설정
 
 return(   

    <Container>
        <Header>
            <Title>코인</Title>
          </Header>
         {loading ? (
         <Loader>
            <Progress></Progress>
          </Loader> )
          : (
            <CoinList>
            {coins.map((coin) => (
                <Coin key={coin.id}>

                    <Link to={`/${coin.id}`} state={coin}> 
                         <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}` } alt="coin icon"/>
                        {coin.name} &rarr;
                    </Link>
                </Coin>
                //보충 :  key값과 i 차이
                //1. Link를 쓰는 이유 => 렌더링 없이 URL 이동
                //2. 리액트 라우터 6부터는 state가 to와 분리됨
                //3. router-dom + link (state)를 이용해서 값 보내기 2
            ))}
             </CoinList>
             ) }
    </Container>
 );
}

export default Coins