import { Task } from '../../services/tasks/models'



export interface TaskState {
  tasksList: Task[]
}

export const GET_TASKS = 'GET_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

export interface TaskUpdateAction {
  type: typeof UPDATE_TASK
  id: string
}

export interface TaskGetAction {
  type: typeof GET_TASKS
  id: string
}

export interface TaskRemoveAction {
  type: typeof REMOVE_TASK
  id: string
}

export interface TaskAddAction {
  type: typeof ADD_TASK
  payload: Task
}

export type TaskActions = TaskGetAction | TaskAddAction | TaskRemoveAction | TaskUpdateAction
