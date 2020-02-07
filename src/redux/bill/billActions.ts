import { ADD_BILL, BillActions, GET_BILLS, CALCULATE_TOTAL_COST } from './billTypes'
import { BillCardInterface } from "../../components/bills/types"

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

// export function calculateTotalCost(total: number): BillActions {
//   return {
//     type: CALCULATE_TOTAL_COST,
//     total: total
//   }
// }
