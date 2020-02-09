import React, { FC } from "react";
import styled from '@emotion/styled';
import { ButtonNewBillInterface } from "./types";


export const ButtonNewBill: FC<ButtonNewBillInterface> = ({ handleClick }) => {

  return (
    <Button onClick={handleClick}>
      + Nueva Factura
    </Button>
  );
};

const Button = styled.button`
  font-size: 1em;
  height: 40px;
  background: #47ab43;
  color: white;
  border-radius: 10px;
  border: 1px solid #47ab43;
  outline:0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
