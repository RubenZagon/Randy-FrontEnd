import React, { FC } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from '../../styled';



export const KeepCalmAnd: FC = (props) => {
  return (
    <Container>
      <span role='img' aria-label='crown'>👑</span>
      <h1>KEEP</h1>
      <h1>CALM</h1>
      <h3>AND</h3>
      <h1>MIRA OTRA PARTE</h1>
      <h3>ESTA TODAVÍA ESTOY TRABAJANDOLA</h3>
    </Container>
  );
};

const Container = styled.div`
background: lightgray;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;

padding: 20px;
border-radius:20px;

span, h1, h3 {
  margin:0px;
  padding:0px;
}

span {
  font-size: 5rem;
}

`
