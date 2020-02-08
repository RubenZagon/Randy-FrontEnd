import { TaskAddAction } from "../../redux/taskList/taskListTypes";
import { NotifyNewAction } from "../../redux/notifys/notifysTypes";

export interface Task {
  uuid: string;
  label: string;
  done: boolean;
}
export interface TodoListProps {
  tasks?: Task[],
  addNotify?: NotifyNewAction | any,
  addTask?: TaskAddAction | any
}
