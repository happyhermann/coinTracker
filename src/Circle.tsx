import { useState } from "react";
import styled from "styled-components"

// 정리해서 블로그로

interface ContainerProps {
    bgColor : string;
    borderColor : string;

}
// object를 설명해주는 것 

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props)=> props.bgColor};
    border: ${(props)=> props.borderColor};
    border-radius: 100px;  
    border: 1px solid ${(props)=> props.borderColor};
`;


interface CircleProps {
    bgColor: string;
    borderColor?: string;
    // optional props
    text? : string;

}
 
 

function Circle({bgColor, borderColor, text= "default text"}: CircleProps) {
    const [value, setValue] = useState(1);
    setValue(2)
   return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} >
        {text}
    </Container>;
    // ?? 만약 BorderColor가 있으면 borderColor를 사용하고 아니면 bgColor 사용
}

interface PlayerShape {
    name: string;
    age: number;
}

 
const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old`

sayHello({name:"nico", age:12})
sayHello({name:"hi", age:12})
 
export default Circle;
