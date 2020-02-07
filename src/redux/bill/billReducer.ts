import { GET_BILLS, BillActions, BillState, ADD_BILL, CALCULATE_TOTAL_COST } from './billTypes'
import { Reducer } from 'react'
import { billCardList } from '../../services/bills/models'

const initialState: BillState = {
  billsList: billCardList,
  totalSpend: 0
}
const billReducer: Reducer<BillState, BillActions> = (
  state: BillState = initialState,
  action: BillActions
): BillState => {
  switch (action.type) {
    case GET_BILLS:
      return {
        ...state
      }

    case ADD_BILL:
      return {
        ...state
      }

    case CALCULATE_TOTAL_COST:
      const totalCostCalculated = Object
        .values(state.billsList)
        .reduce((acc: number, { paymentDivision }) => acc + paymentDivision, 0);
      return {
        ...state,
        totalSpend: totalCostCalculated
      }

    default:
      return state
  }
}

export default billReducer


