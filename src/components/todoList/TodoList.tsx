import React, { FC, useState, useCallback } from "react";
import styled from "@emotion/styled";
import Anime from '@mollycule/react-anime';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Transition, TransitionGroup } from "react-transition-group";
import { TodoListProps } from "./types";


export const TodoList: FC<TodoListProps> = ({ tasks }) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputTask, setInputTask] = useState('')

  /////////////////////const [taskList, setTaskList] = useState<Task[]>(initialTasks);

  /*

  useEffect(() => {
    Tasks.getAll()
      .then(tasks => setTaskList(tasks))
      .catch(err => console.log("HE PETAO", err));
  }, [url]);

  const handleDelete = useCallback(
    () => (taskToUpdate: Task) => {
      const newTasks = taskList.map(task => {
        if (task.uuid === taskToUpdate.uuid) {
          console.log('Tarea completada - ', task.label);
          return { ...task, done: !task.done };
        }
        return task;
      })

      setTaskList(newTasks);
  }, [taskList]);

  */


  ///////////    FUNCIONES PARA EL DISPATCH

  const handleDelete = useCallback(
    (index: number) => () => {
      // const newTasks = [...tasks];
      // newTasks.splice(index, 1);

      // setTaskList(newTasks);
    }, [tasks]);

  const handleInput = (event) => {
    setInputTask(event.target.value)
    event.target.value = "";
  }

  const addNewTask = () => {
    // const newTasks = [...tasks];
    // inputTask !== '' ?
    //   newTasks.push({ uuid: "" + Math.random(), label: inputTask, done: false })
    //   : console.warn('Debe introducir un texto válido en el campo de nueva tarea');

    // setTaskList(newTasks);


    //dispatch({ type: NEW_NOTIFY });
  };

  return (
    <Container>
      <HeaderTasks>
        <InputTask type='text' onBlur={event => handleInput(event)} name='inputTask' placeholder="Ejemplo: Tender la ropa" />
        <Button onClick={addNewTask}>+ Agregar</Button>
      </HeaderTasks>

      {tasks && tasks.map((task, i) => {
        return (
          <ContainerTask onClick={handleDelete(i)}>
            <input type="checkbox" onChange={handleDelete(i)} checked={task.done} value={task.uuid} />
            <label htmlFor="clearTask">
              <span></span>
              <p>{task.label}</p>
            </label>
          </ContainerTask>
        )
      })}

      {/* <TransitionGroup>
        {tasks && tasks.map((task, i) => {
          return <Anime
            appear
            key={task.uuid}
            onEntering={{
              translateY: [-100, 0],
              opacity: [0, 1],
              duration: 200,
              delay: i * 40
            }}
            onExiting={{
              translateX: "100%",
              opacity: 0,
              easing: "easeInOutQuad",
              duration: 300
            }}
            duration={300}
          >
            <ContainerTask onClick={handleDelete(i)}>
              <input type="checkbox" onChange={handleDelete(i)} checked={task.done} value={task.uuid} />
              <label htmlFor="clearTask">
                <span></span>
                <p>{task.label}</p>
              </label>
            </ContainerTask>
          </Anime>
        })}
      </TransitionGroup> */}
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

const ContainerTask = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  border-radius: 5px;
  margin: 3px 0px;
  padding: 7px 15px;
  cursor: pointer;

  p {
    margin:0px;
    padding:0px;
  }

  label{
    display:flex;
    align-content:center;
  }

  &:hover {
    /* box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.3); */
    /* transform: translateY(-5px); */
    background: lightgreen;
  }

  & input[type="checkbox"] {
    display: none;
  }

  & input[type="checkbox"] + label span {
    background: #EAEAEA;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    border: 2px solid lightgray;
    border-radius: 5px;
    cursor: pointer;
  }

  & input[type="checkbox"]:checked + label span{
    background: #47AB43;
    background-size: cover;
  }

`;
