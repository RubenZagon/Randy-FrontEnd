import billReducer from '../redux/bill/billReducer';
import tasksReducer from '../redux/taskList/taskListReducer';
import { combineReducers } from 'redux';
import notifysReducer from '../redux/notifys/notifysReducer';


export const rootReducer = combineReducers({
  notifys: notifysReducer,
  billData: billReducer,
  taskData: tasksReducer
})

export default rootReducer

/// https://github.com/gopinav/React-Redux-Tutorials/blob/master/react-redux-demo/src/redux/iceCream/iceCreamReducer.js
