import { combineReducers } from 'redux'
import tasksReducer from './taskList/taskListReducer'
import billReducer from './bill/billReducer'


const rootReducer = combineReducers({
  tasks: tasksReducer,
  bill: billReducer

})

export default rootReducer

/// https://github.com/gopinav/React-Redux-Tutorials/blob/master/react-redux-demo/src/redux/iceCream/iceCreamReducer.js
