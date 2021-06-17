import React from 'react'
import { shallow } from 'enzyme'
import { findByDataTestAttr, checkProps } from './../../../Utils/index'
import ListItem from './index'

describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Some Text',
      }

      const propsError = checkProps(ListItem, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  describe('Component Renders', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Some Text',
      }
      wrapper = shallow(<ListItem {...props} />)
    })

    it('Should render without errors', () => {
      const component = findByDataTestAttr(wrapper, 'listItemComponent')
      expect(component.length).toBe(1)
    })

    it('Should render a title', () => {
      const title = findByDataTestAttr(wrapper, 'componentTitle')
      expect(title.length).toBe(1)
    })

    it('Should render description', () => {
      const desc = findByDataTestAttr(wrapper, 'componentDesc')
      expect(desc.length).toBe(1)
    })
  })

  describe('Should not render', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        desc: 'Some Text',
      }
      wrapper = shallow(<ListItem {...props} />)
    })

    it('Component is not rendered', () => {
      const component = findByDataTestAttr(wrapper, 'listItemComponent')
      expect(component.length).toBe(0)
    })
  })
})
