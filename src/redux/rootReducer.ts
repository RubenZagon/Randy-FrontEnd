import { combineReducers } from 'redux'
import tasksReducer, { TaskAction } from './taskList/taskListReducer'
import billReducer, { BillAction } from './bill/billReducer'
import { Task } from '../services/tasks/models'
import { BillCardInterface } from '../components/bills/billCardsList'
import { Reducer } from 'react'

export interface TaskState {
  tasks: Task[]
}

export interface BillState {
  bills: BillCardInterface[]
}

export interface AppState {
  taskList: TaskState,
  billList: BillState
}


export type ReducerActions = TaskAction | BillAction;

const rootReducer: Reducer<AppState, BillAction> = { billList: billReducer }

export default rootReducer

/// https://github.com/gopinav/React-Redux-Tutorials/blob/master/react-redux-demo/src/redux/iceCream/iceCreamReducer.js
