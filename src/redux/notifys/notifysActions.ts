import { NEW_NOTIFY, NotifyActions, RESET_NOTIFYS } from './notifysTypes'


export const addNotify = (): NotifyActions => {
  return {
    type: NEW_NOTIFY
  }
}

export const resetNotifys = (): NotifyActions => {
  return {
    type: RESET_NOTIFYS
  }
}
