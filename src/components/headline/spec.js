import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'
import { findByDataTestAttr, checkProps } from './../../../Utils/index'

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component
}

describe('Headline Component', () => {
  describe('Have props', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc',
      }
      wrapper = setUp(props)
    })

    it('Should render without errors', () => {
      const component = findByDataTestAttr(wrapper, 'headlineComponent')
      expect(component.length).toBe(1)
    })

    it('Should render a h1', () => {
      const h1 = findByDataTestAttr(wrapper, 'header')
      expect(h1.length).toBe(1)
    })

    it('Should render a desc', () => {
      const desc = findByDataTestAttr(wrapper, 'desc')
      expect(desc.length).toBe(1)
    })
  })

  describe('No props', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setUp()
    })

    it('Should not render without errors', () => {
      const component = findByDataTestAttr(wrapper, 'headlineComponent')
      expect(component.length).toBe(0)
    })
  })
})

describe('Headline Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [
          {
            fName: 'Test fName',
            lName: 'Test lName',
            email: 'test@email.com',
            age: 23,
            onlineStatus: false,
          },
        ],
      }

      const propsErr = checkProps(Headline, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })
})
