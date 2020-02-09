/* eslint-disable no-labels */
import React, { FC, useEffect } from "react";
import styled from '@emotion/styled';

interface SpendCalculatorProps {
  total?: number,
  calculateTotalCost?: () => void
}

export const SpendCalculator: FC<SpendCalculatorProps> = ({ total, calculateTotalCost }) => {

  useEffect(() => {
    calculateTotalCost!()
  }, [calculateTotalCost])

  return (
    <Container>
      <h2><span role='img' aria-label='dinero volando'>💰</span> Total de gastos <span role='img' aria-label='dinero volando'>💰</span></h2>
      <h1>{total}€</h1>
    </Container>
  );
};

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;

h2,h1 {
margin:5px;
padding:0px;
}
`


