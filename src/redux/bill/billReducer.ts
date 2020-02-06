import { GET_BILLS, BillActions,BillState, ADD_BILL } from './billTypes'
import { Reducer } from 'react'

const initialState: BillState = {
  bills: [
  {
    color:"LemonChiffon",
    cost:0,
    frecuency:"Mensual",
    id:"0",
    image:"",
    payer:[""],
    paymentDivision:0,
    title:"Bill"
  }
]}

const billReducer: Reducer<BillState, BillActions> = (
  state: BillState =  initialState ,
  action: BillActions
): BillState => {
  switch (action.type) {
    case GET_BILLS:
      return {
        ...state,
      }
    case ADD_BILL:
      return {
        bills: [...state.bills,action.payload]
      }
    default:
      return state
  }
}

export default billReducer


