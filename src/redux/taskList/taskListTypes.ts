import { Task } from '../../services/tasks/models'



export interface TaskState {
    readonly tasks: Task[]
}

export const GET_TASKS = 'GET_TASKS'
export const ADD_TASK = 'ADD_TASK'

  export interface TaskGetAction {
      type: typeof GET_TASKS
        id: number
  }

  export interface TaskAddAction {
      type: typeof ADD_TASK
      payload: Task
  }

  export type TaskActions = TaskGetAction | TaskAddAction