import React, { FC } from "react";
import styled from "@emotion/styled";
import { TodoList } from "../../components/todoList/TodoList";
import { Achievements } from "../../components/achievements/achievements";

export const Tasklist: FC = () => {
  return (
    <Container>

      <TodoList initialTasks={[]} url="http://randy.tools/api/tasksList" />
      <span></span>
      <Achievements />

    </Container>
  );
};

const Container = styled.div`
width: 80vw;
height: 80vh;

display:grid;
grid-template-columns: 1fr 10% 1fr ;


`;

