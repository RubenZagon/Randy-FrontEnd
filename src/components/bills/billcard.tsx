import React, { FC } from "react";
import styled from '@emotion/styled';
import { BillCardInterface } from "./types";


export const BillCard: FC<BillCardInterface> = (props, calculateTotalCost) => {

  return (
    <Container color={props.color}>
      <img src={props.image} alt={props.title} />
      <ContainerDivision>
        <ContainerInfo>
          <h3>{props.title} {props.cost} <span>€/{props.frecuency}</span></h3>
          <p>Días restantes para el siguiente pago: </p>
        </ContainerInfo>
        <h2 onClick={() => calculateTotalCost()}>Parte a pagar {props.paymentDivision} €</h2>
      </ContainerDivision>
    </Container>
  );
};

const Container = styled.div`
  background: ${props => props.color};
  border-radius:20px;
  margin-bottom: 10px;
  padding: 10px;
  width: 400px;
  height: 100px;
  display:flex;
  flex-direction:row;
  align-items:center;
  color: #484848;

  & img {
    width: 60px;
    height: 60px;
    padding: 10px;

  & > h1 {
    flex-direction:column;
  }
}
`

const ContainerInfo = styled.div`
  flex-direction:column;
  width: 100%;
  color: #000000;

  & h3 {
    margin:0px;
  }

  & span {
    font-size: 0.7rem;
  }

  & p {
    font-size: 0.7rem;
    color: #484848;
    margin:0px;
  }
`
const ContainerDivision = styled.div`
  flex-direction:column;
  margin-left: 10px;

  & h1 {
  margin:0px;

  }
`
