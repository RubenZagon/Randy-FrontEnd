import { BillCardInterface } from "../../components/bills/types";

export interface BillState {
  billsList: BillCardInterface[],
  totalSpend: number

}

export const GET_BILLS = 'GET_BILLS';
export const ADD_BILL = 'ADD_BILL'
export const CALCULATE_TOTAL_COST = 'CALCULATE_TOTAL_COST'

export interface BillGetAction {
  type: typeof GET_BILLS
  id: string
}
export interface BillAddAction {
  type: typeof ADD_BILL
  payload: BillCardInterface
}
export interface BillCalculateTotalCostAction {
  type: typeof CALCULATE_TOTAL_COST
  total: number
}

export type BillActions = BillGetAction | BillAddAction | BillCalculateTotalCostAction
