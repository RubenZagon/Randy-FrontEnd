import React, { FC } from "react";
import styled from '@emotion/styled';

interface DayComponentProps {
  number: number
}

export const DayComponent: FC<DayComponentProps> = ({ number }) => {
  return (
    <Container>
      {number}
    </Container>
  );
};

const Container = styled.div`
background: white;
border: 1px solid gray;
`
