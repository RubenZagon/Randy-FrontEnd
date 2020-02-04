import { TASK_COMPLETE } from './taskListTypes'

export const completeTask = (indexTask: number) => {
  return {
    type: TASK_COMPLETE,
    id: indexTask
  }
}
