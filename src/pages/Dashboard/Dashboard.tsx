import React, { FC } from "react";
import styled from '../../styled';
import { KeepCalmAnd } from "../../components/keepCalm/keepCalm";

export const Dashboard: FC = () => {
  return (
    <Container>
      <KeepCalmAnd />
    </Container>
  );
};

const Container = styled.div`
height:80vh;
display:flex;
justify-content:center;
align-items:center;
`
