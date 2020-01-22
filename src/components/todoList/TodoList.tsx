import React, { FC, useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { TaskItem } from "./TaskItem";
import { NEW_NOTIFY, NotifyContext } from "../circleOfNotifys/notifyProvider";
import { Tasks } from "../../services/tasks/services";

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
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [taskList, setTaskList] = useState();

  useEffect(() => {
    Tasks.getAll()
      .then(tasks => setTaskList(tasks))
      .catch(err => console.log("HE PETAO", err));
  }, [url]);

  const handleOnCheckInput = (taskToUpdate: Task) => {
    const newTasks = tasks.map(task => {
      if (task.uuid === taskToUpdate.uuid) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const addNewTask = () => {
    // const newTasks = [...tasks];
    // newTasks.push({ uuid: "" + Math.random(), label: `Todo-${Math.random()}`, done: false });
    // setTasks(newTasks);
    dispatch({ type: NEW_NOTIFY });
  };

  return (
    <Container>
      <Button onClick={addNewTask}>+ Agregar nueva tarea</Button>
      {taskList && taskList.map(task => <TaskItem key={task.uuid} task={task} onCheckInput={handleOnCheckInput} />)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 1em;
  height: 40px;
  margin-right: 50px;
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
