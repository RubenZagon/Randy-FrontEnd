export interface Task {
  uuid: string;
  label: string;
  done: boolean;
}
export interface TodoListProps {
  tasks?: Task[]
}
