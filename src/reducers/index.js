import { combineReducers } from 'redux'
import success from './successReducer'

const rootReducer = combineReducers({ success })

export { rootReducer }
