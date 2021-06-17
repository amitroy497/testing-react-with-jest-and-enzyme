import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './../src/reducers'
import { middleware } from './../src/createStore'

const findByDataTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    expectedProps,
    'props',
    component.name
  )
  return propsErr
}

const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}
export { findByDataTestAttr, checkProps, testStore }
