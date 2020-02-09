import { Task } from "../../services/tasks/models"
import { TaskActions, ADD_TASK, GET_TASKS, REMOVE_TASK, UPDATE_TASK } from "./taskListTypes"

export function addTask(task: Task): TaskActions {
  return {
    type: ADD_TASK,
    payload: task
  }
}

export function getTask(id: string): TaskActions {
  return {
    type: GET_TASKS,
    id: id
  }
}

export function removeTask(id: string): TaskActions {
  return {
    type: REMOVE_TASK,
    id: id
  }
}

export function updateTask(id: string): TaskActions {
  return {
    type: UPDATE_TASK,
    id: id
  }
}
