---
to: src/redux/<%= name %>/<%= name %>Reducer.ts
---
import { PRUEBA_TYPE } from './<%= name %>Types'

const initialState = {
  count: 20
}

const <%= name %>Reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case PRUEBA_TYPE: return {
      ...state,
      count: state.count - 1
    }

    default: return state
  }
}

export default <%= name %>Reducer


