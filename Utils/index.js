import checkPropTypes from 'check-prop-types'

const findByDataTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  )
  return propsErr
}
export { findByDataTestAttr, checkProps }
