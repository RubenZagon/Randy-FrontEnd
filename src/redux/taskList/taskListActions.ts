export const TASK_COMPLETE = 'TASK_COMPLETE'

export const completeTask = (indexTask: number) => {
  return {
    type: TASK_COMPLETE,
    id: indexTask
  }
}
