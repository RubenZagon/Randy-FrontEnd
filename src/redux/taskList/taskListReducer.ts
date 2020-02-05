import { Reducer } from 'react'
import { TaskActions, TaskState, GET_TASKS, ADD_TASK } from './taskListTypes'

const initialState: TaskState = {
  tasks : [
  {
    done:false,
    label:"TEST",
    uuid:"0"
  }
]}

const tasksReducer: Reducer<TaskState, TaskActions> = (
  state: TaskState = initialState,
  action: TaskActions
): TaskState => {
  switch (action.type) {
    case GET_TASKS:
      return state
    case ADD_TASK:
      return {
        tasks: [...state.tasks,action.payload]
      }
    default:
      return state
  }
}

export default tasksReducer

// EJEMPLO PARA BUSCAR UNA TALEA CON EL ID Y MARCARLA COMO COMPLETADA

// const handleDelete = useCallback(
//   () => (taskToUpdate: Task) => {

//     const newTasks = taskList.map(task => {
//       if (task.uuid === taskToUpdate.uuid) {
//         console.log('Tarea completada - ', task.label);
//         return { ...task, done: !task.done };
//       }
//       return task;
//     })

//     setTaskList(newTasks);
//   }, [taskList]);
