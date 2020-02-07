import { BillCardInterface } from "../../components/bills/types";

export interface BillState {
  bills: BillCardInterface[]
}

export const GET_BILLS = 'GET_BILLS';
export const ADD_BILL = 'ADD_BILL'

export interface BillGetAction {
  type: typeof GET_BILLS
  id: string
}
export interface BillAddAction {
  type: typeof ADD_BILL
  payload: BillCardInterface
}

export type BillActions = BillGetAction | BillAddAction
