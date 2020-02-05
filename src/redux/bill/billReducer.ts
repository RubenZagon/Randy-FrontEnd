import { GET_BILLS } from './billTypes'
import { billCardList } from '../../components/bills/billCardsList'
import { Reducer } from 'react'
import { Action } from 'redux'
import { BillState } from '../rootReducer'

export type BillActionComplete = Action<typeof GET_BILLS>

export interface BillAction extends BillActionComplete {
}

const billReducer: Reducer<BillState, BillAction> = (
  state: BillState = { bills: billCardList },
  action: BillAction
): BillState => {
  switch (action.type) {
    case GET_BILLS:
      return state
    default:
      return state
  }
}

export default billReducer


