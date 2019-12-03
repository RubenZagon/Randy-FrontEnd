export const newNotify = (alpha: number) => ({ type: 'NEW_NOTIFY', alpha });
export const empyNotifys = (alpha: number) => ({ type: 'EMPY_NOTIFYS', alpha });

type ActionType =
  | NewNotify
  | EmpyNotifys

export default ActionType;

export interface Action {
  readonly type: string;
}

export interface NewNotify extends Action {
  alpha: number;
}

export interface EmpyNotifys extends Action {
  alpha: number;
}
