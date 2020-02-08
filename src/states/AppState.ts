import { TaskState } from "../redux/taskList/taskListTypes";
import { BillState } from "../redux/bill/billTypes";


export interface AppState {
  notifys: NotifyState,
  taskList: TaskState,
  billList: BillState
}
