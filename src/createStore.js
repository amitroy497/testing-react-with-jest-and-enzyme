import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { rootReducer } from './reducers/index'

const middleware = [ReduxThunk]

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
const store = createStoreWithMiddleware(rootReducer)

export { middleware, createStoreWithMiddleware, store }
