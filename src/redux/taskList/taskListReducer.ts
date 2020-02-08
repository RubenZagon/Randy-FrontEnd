import { Reducer } from 'react'
import { TaskActions, TaskState, GET_TASKS, ADD_TASK } from './taskListTypes'
import { initialTasksList } from '../../services/tasks/models'


const initialState: TaskState = {
  tasksList: initialTasksList
}

const tasksReducer: Reducer<TaskState, TaskActions> = (
  state: TaskState = initialState,
  action: TaskActions
): TaskState => {
  switch (action.type) {
    case GET_TASKS:
      return state
    case ADD_TASK:
      return {
        tasksList: [...state.tasksList, action.payload]
      }
    default:
      return state
  }
}

export default tasksReducer

// EJEMPLO PARA BUSCAR UNA TAREA CON EL ID Y MARCARLA COMO COMPLETADA

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
