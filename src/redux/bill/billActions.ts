import { ADD_BILL, BillActions, GET_BILLS } from './billTypes'
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
