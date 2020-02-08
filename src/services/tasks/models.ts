import { uniqueId } from "../../utils/uniqueId"
import tasksList from '../../database/tasksList.json'

export interface Task {
  uuid: string;
  label: string;
  done: boolean;
}

export const initialTasksList: Task[] = tasksList.map((task: { label: string, done: boolean }) => {
  return {
    uuid: uniqueId(),
    ...task,
  }
})
