import { PRUEBA_TYPE } from './billTypes'
import { billCardList } from '../../components/bills/billCardsList'


const billReducer = (state = billCardList, action: { type: string }) => {
  switch (action.type) {
    case PRUEBA_TYPE: return {
      ...state,
      // count: state.count - 1
    }

    default: return state
  }
}

export default billReducer


