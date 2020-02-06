import billReducer from '../redux/bill/billReducer';
import tasksReducer from '../redux/taskList/taskListReducer';
import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
  billList: billReducer,
  taskList: tasksReducer
})

export default rootReducer

/// https://github.com/gopinav/React-Redux-Tutorials/blob/master/react-redux-demo/src/redux/iceCream/iceCreamReducer.js
