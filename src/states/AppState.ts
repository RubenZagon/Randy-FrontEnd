import { TaskState } from "../redux/taskList/taskListTypes";
import { BillState } from "../redux/bill/billTypes";
import { NotifyState } from "../redux/notifys/notifysTypes";


export interface AppState {
  notifys: NotifyState,
  taskList: TaskState,
  billList: BillState
}
