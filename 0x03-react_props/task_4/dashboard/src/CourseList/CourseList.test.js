import React from 'react'
import { shallow } from 'enzyme'

import CourseList from './CourseList'
import CourseListRow from './CourseListRow'

describe('<CourseList />', () => {
  it('Check that it renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />)
    expect(wrapper.exists()).toBe(true)
  })
  it('Check that it renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />)
    expect(wrapper.find(CourseListRow).length).toBe(5)
  })
})
