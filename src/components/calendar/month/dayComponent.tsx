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
background: white;
border: 1px solid gray;
font-weight:bold;

p{
  padding:5px;
  margin:0px;
  width:1.5rem;
  height:1.5rem;
}

&.active{
  p{
    background: green;
    color:white;
  }
}
`
