import React  from "react";
import styled from "styled-components";
import { useState } from "react";


export default function Form () {
    const [value, setValue] = useState("");
  
  
    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
     const {
      currentTarget: {value},
     } = event;
     setValue(value);
     console.log(value)
  
    } 
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("hello", value, "님")
  
    }
  
    return (
      <div>
        <form  onSubmit={onSubmit}>
          <input value={value} onChange={onChange} type="text" placeholder="username"/>
          <button>Log in</button>
        </form>
      </div>
     );
  }