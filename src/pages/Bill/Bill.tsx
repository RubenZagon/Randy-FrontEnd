import React, { FC } from "react";
import styled from "@emotion/styled";
import { BillsCards } from "../../components/bills/BillsCards";
import { SpendCalculator } from "../../components/spendCalculator/spendCalculator";


export const Bill: FC = () => {
  return (
    <Container>
      <span className="billCards">
        <BillsCards />
      </span>
      <span className="calculator">
        <SpendCalculator />
      </span>
    </Container>
  )
};

const Container = styled.div`
display:grid;
grid-template-columns: 1fr 5% 1fr;
grid-template-rows:1fr;
height:80vh;

.billCards{
  grid-column:1/2;
}

.calculator{
  grid-column:3/4;
}

`
