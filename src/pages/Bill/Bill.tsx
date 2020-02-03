import React, { FC } from "react";
import styled from "@emotion/styled";
import { BillsCards } from "../../components/bills/BillsCards";


export const Bill: FC = () => {
  return (
    <Container>
      <BillsCards />
    </Container>
  )
};

const Container = styled.div`
display:flex;
flex-direction:column;
`
