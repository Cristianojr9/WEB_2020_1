import {createStore, combineReducers} from 'redux'
import NUM_Reducer from './reducers/numeros'

const reducers = combineReducers(
    {
        numeros: NUM_Reducer
    }
)

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig