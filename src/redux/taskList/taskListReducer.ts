import { GET_TASKS } from './taskListTypes'
import initialTasksDefault from '../../components/todoList/tasklistDefault'
import { Reducer } from 'react'
import { Action } from 'redux'
import { TaskState } from '../rootReducer'

export type TaskActionComplete = Action<typeof GET_TASKS>

export interface TaskAction extends TaskActionComplete {
  id: number
}

const tasksReducer: Reducer<TaskState, TaskAction> = (
  state: TaskState = { tasks: initialTasksDefault },
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case GET_TASKS:
      return state

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
