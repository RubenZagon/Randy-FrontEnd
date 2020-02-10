---
to: src/components/<%= name %>/<%= name %>.tsx
---
import React, { FC } from "react";
import styled from '@emotion/styled';
import { <%= name %>Interface } from "./types";


export const <%= name %>: FC<<%= name %>Interface> = (props) => {

  return (
    <Container>
    </Container>
  );
};

const Container = styled.div`

`
