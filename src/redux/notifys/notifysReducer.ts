import { NEW_NOTIFY, RESET_NOTIFYS, NotifyState, NotifyActions } from './notifysTypes'
import { Reducer } from 'react'

const initialState: NotifyState = {
  count: 5
}

const notifysReducer: Reducer<NotifyState, NotifyActions> = (
  state: NotifyState = initialState,
  action: NotifyActions
): NotifyState => {
  switch (action.type) {
    case NEW_NOTIFY:
      return handleNewNotifications(state);
    case RESET_NOTIFYS:
      return handleResetOfNotifications(state);
    default:
      return state;
  }
};

const handleNewNotifications = (state: NotifyState) => {
  return { ...state, counter: state.count + 1 }
}

const handleResetOfNotifications = (state: NotifyState) => {
  return { ...state, counter: state.count = 0 }
}

export default notifysReducer


