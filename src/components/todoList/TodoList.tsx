import React, { FC, useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Anime from '@mollycule/react-anime';
import animejs from 'animejs';
import { TaskItem } from "./TaskItem";
import { NEW_NOTIFY, NotifyContext } from "../circleOfNotifys/notifyProvider";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Tasks } from "../../services/tasks/services";
import initialTasksDefault from './tasklistDefault';


export interface Task {
  uuid: string;
  label: string;
  done: boolean;
}

interface TodoListProps {
  initialTasks: Task[];
  url: string;
}



export const TodoList: FC<TodoListProps> = ({ initialTasks = [], url }) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useContext(NotifyContext); // eslint-disable-next-line

  const [taskList, setTaskList] = useState<Task[]>(initialTasksDefault);

  // useEffect(() => {
  //   Tasks.getAll()
  //     .then(tasks => setTaskList(tasks))
  //     .catch(err => console.log("HE PETAO", err));
  // }, [url]);

  const handleOnCheckInput = (taskToUpdate: Task) => {
    const newTasks = taskList.map(task => {
      if (task.uuid === taskToUpdate.uuid) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTaskList(newTasks);
  };

  const addNewTask = () => {
    const newTasks = [...taskList];
    newTasks.push({ uuid: "" + Math.random(), label: `Todo-${Math.random()}`, done: false });
    setTaskList(newTasks);
    dispatch({ type: NEW_NOTIFY });
  };

  return (
    <Container>
      <HeaderTasks>
        <InputTask type='text' name='inputTask' placeholder="Ejemplo: Tender la ropa" />
        <Button onClick={addNewTask}>+ Agregar</Button>
      </HeaderTasks>

      {taskList && taskList.map(task => {
        return <Anime in
          duration={300}
          appear
          onEntering={{
            translateY: [100, 0],
            opacity: [0, 1],
            delay: animejs.stagger(60),
            easing: "linear"
          }}>
          <TaskItem key={task.uuid} task={task} onCheckInput={handleOnCheckInput} />
        </Anime>
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const HeaderTasks = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

width: 100%;
margin: 20px 0px;
`

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  height: 40px;
  min-width: 115px;
  margin-right: 3%;
  background: #47ab43;
  color: white;
  border-radius: 10px;
  border: 1px solid #47ab43;
  outline: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const InputTask = styled.input`
padding: 10px 5px 5px 0px;
margin-right: 5%;
width: 70%;
font-size: 1em;
border: 0px;
border-bottom: 3px lightgray solid;

&:focus{
  border-bottom: 3px green solid;
}
`
