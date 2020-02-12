import React, { FC } from "react";
import styled from "@emotion/styled";
import { Achievements } from "../../components/achievements/achievements";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import handleUnlockAchievement from "../../components/achievements/handleUnlockAchievement";
import TodoList from "../../components/todoList/";
import { SMALLPHONE } from "../../utils/const";


export const Tasklist: FC = () => {
  return (
    <Container>
      <span className='todoList'>
        <TodoList />
      </span>
      <span className='achievements'>
        <Achievements />
      </span>
      {/* <button onClick={() => handleUnlockAchievement('Atareada', 0, 3)}>Prueba</button> */}

    </Container>
  );
};

const Container = styled.div`

@media screen and (max-width: ${SMALLPHONE}) {
  grid-template-rows: 1fr 10% 1fr ;
  grid-template-columns: 10px 1fr 10px;
  width: 100vw;
  grid-template-areas:
  ". todo ."
  ". . ."
  ". goals .";
  }

width: 80vw;
height: 80vh;

display:grid;
grid-template-columns: 1fr 5% 1fr ;
grid-template-areas:
  "todo . goals";


  .todoList{
    grid-area: todo;
  }

  .achievements{
    grid-area: goals;
  }
`;

