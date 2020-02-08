
export interface NotifyState {
  count: number
}

export const NEW_NOTIFY = 'NEW_NOTIFY';
export const RESET_NOTIFYS = 'RESET_NOTIFYS';


export interface NotifyNewAction {
  type: typeof NEW_NOTIFY
}

export interface NotifyResetAction {
  type: typeof RESET_NOTIFYS
}


export type NotifyActions = NotifyNewAction | NotifyResetAction
