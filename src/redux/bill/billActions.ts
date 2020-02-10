import { ADD_BILL, BillActions, GET_BILLS, CALCULATE_TOTAL_COST } from './billTypes'
import { BillCardInterface } from "../../components/billCard/types"

export function addBill(bill: BillCardInterface): BillActions {
  return {
    type: ADD_BILL,
    payload: bill
  }
}

export function getBill(id: string): BillActions {
  return {
    type: GET_BILLS,
    id: id
  }
}

export function calculateTotalCost(): BillActions {
  return {
    type: CALCULATE_TOTAL_COST,
  }
}
