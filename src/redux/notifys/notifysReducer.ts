import { ADD_NOTIFY } from './notifysTypes'

const initialState = {
  count: 0
}

const notifysReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case ADD_NOTIFY: return {
      ...state,
      count: state.count + 1
    }

    default: return state
  }
}

export default notifysReducer


