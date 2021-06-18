import React from 'react'
import { findByDataTestAttr, checkProps } from './../../../Utils/index'
import SharedButton from './index'
import { shallow } from 'enzyme'

describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {},
      }

      const propsError = checkProps(SharedButton, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  describe('Renders', () => {
    let wrapper, mockFunc
    beforeEach(() => {
      mockFunc = jest.fn()
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: mockFunc,
      }

      wrapper = shallow(<SharedButton {...props} />)
    })

    it('Should render a button', () => {
      const button = findByDataTestAttr(wrapper, 'buttonComponent')
      expect(button.length).toBe(1)
    })

    it('Should emit callback on click event', () => {
      const button = findByDataTestAttr(wrapper, 'buttonComponent')
      button.simulate('click')
      const callback = mockFunc.mock.calls.length
      expect(callback).toBe(1)
    })
  })
})
