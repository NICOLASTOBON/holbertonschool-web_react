import React from 'react'
import { shallow } from 'enzyme'

import CourseListRow from './CourseListRow'

describe('<CourseListRow />', () => {

  describe('When isHeader is true', () => {
    it('Component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='First'/>)
      expect(wrapper.find('th').length).toEqual(1)
      expect(wrapper.find('th').text()).toEqual('First')
    })
    it('Component renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='First' textSecondCell='Second'/>)
      expect(wrapper.find('th').length).toEqual(2)
    })
  })

  describe('When isHeader is false', () => {
    it('Component renders correctly two td elements within a tr element', () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='First' textSecondCell='Second' />)
      expect(wrapper.find('tr > td').length).toEqual(2)
    })
  })
})
