import React, { FC } from "react";
import styled from "@emotion/styled";
import { KeepCalmAnd } from "../../components/keepCalm/keepCalm";

export const Settings: FC = () => {
  return (
    <Container>
      <KeepCalmAnd />
      <Footer>
        <a href="https://github.com/RubenZagon">
          {" "}
          Hecho con amor{" "}
          <span role="img" aria-label="corazón verde">
            💚
          </span>{" "}
          por Rubén Zamora
        </a>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Footer = styled.p`
  display: flex;
  align-self: center;
  background: orange;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
  & a:link {
    color: black;
    text-decoration: none;
  }
  & a:hover {
    color: darkviolet;
  }
`;
