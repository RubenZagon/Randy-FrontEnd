import { createStore, Store } from 'redux'
import {rootReducer} from '../reducers/rootReducer'
import { AppState } from '../states/AppState'
import { composeWithDevTools } from 'redux-devtools-extension';

export default function createNewStore(): Store<AppState> {
    return createStore(rootReducer,
        composeWithDevTools() )
}
