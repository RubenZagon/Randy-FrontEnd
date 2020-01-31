import React, { FC } from "react";
import styled from '@emotion/styled';

interface DayComponentProps {
  number: number,
  today?: string
}

export const DayComponent: FC<DayComponentProps> = ({ number, today }) => {
  return (
    <Container className={today}>
      <p>{number}</p>
    </Container>
  );
};

const Container = styled.div`
/* background: lightgrey; */
font-family: "Montserrat",sans-serif;
border-radius:50%;
width:50px;;
height:50px;;

display:flex;
justify-content:center;
align-content:center;

&:hover{
  color:green;
  background: lightgreen;
}

&.active{
    background: green;
    color:white;
    font-weight:bold;
}
`
