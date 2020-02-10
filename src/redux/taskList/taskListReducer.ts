import { Reducer } from 'react'
import { TaskActions, TaskState, GET_TASKS, ADD_TASK, REMOVE_TASK } from './taskListTypes'
import { initialTasksList, Task } from '../../services/tasks/models'



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
    case REMOVE_TASK:
      return {
        tasksList: remove(state.tasksList, action.id)
      }
    default:
      return state
  }
}

export default tasksReducer

function remove(taskList: Task[], id: string) {
  const newTaskList = taskList.map((task) => {
    if (task.uuid === id) {
      return { ...task, done: !task.done };
    }
    return task;
  })
  return newTaskList.filter((task) => task.done !== true)
}
