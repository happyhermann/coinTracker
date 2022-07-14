import React from 'react';
import { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props)=> props.theme.bgColor};

  height: 100vh;
`

const H1 = styled.h1`
    color: ${(props)=> props.theme.textColor};
`



function Dummy({text, active = false}:DummyProps) {
  return <H1>{text}</H1>
}
// 1. 타입스크립트 컴포넌트 props는 anything으로 뜬다 이걸 원하지 않음 

interface DummyProps {
  text: string;
  active?: boolean;
}

//2. 그래서 쓰는게 인터페이스 (오브젝트내 데이터에 대한 설명)

function App() {
 
 
  return (
    <Container>
      <Dummy active text="게임"/>
    </Container>
    
   );
}


export default App;
