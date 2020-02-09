import { Task } from "../../services/tasks/models"
import { TaskActions, ADD_TASK, GET_TASKS } from "./taskListTypes"

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
