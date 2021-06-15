import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { findByDataTestAttr } from './../../../Utils/index'

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe('Header Component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('Should render without errors', () => {
    const wrapper = findByDataTestAttr(component, 'headerComponent')
    expect(wrapper.length).toBe(1)
  })

  it('Should render a log', () => {
    const logo = findByDataTestAttr(component, 'logoIMG')
    expect(logo.length).toBe(1)
  })
})
