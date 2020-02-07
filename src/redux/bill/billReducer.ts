import { GET_BILLS, BillActions, BillState, ADD_BILL } from './billTypes'
import { Reducer } from 'react'
import { billCardList } from '../../services/bills/models'

const initialState: BillState = {
  bills: billCardList
}

const billReducer: Reducer<BillState, BillActions> = (
  state: BillState = initialState,
  action: BillActions
): BillState => {
  switch (action.type) {
    case GET_BILLS:
      return {
        ...state,
      }
    case ADD_BILL:
      return {
        bills: [...state.bills, action.payload]
      }
    default:
      return state
  }
}

export default billReducer


