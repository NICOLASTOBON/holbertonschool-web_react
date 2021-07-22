import React from 'react'
import { shallow } from 'enzyme'

import CourseList from './CourseList'
import CourseListRow from './CourseListRow'

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
]

describe('<CourseList />', () => {
  it('Check that it renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />)
    expect(wrapper.exists()).toBe(true)
  })
  it('Check that it renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />)
    expect(wrapper.find(CourseListRow).length).toBe(5)
  })
  it('renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
    const wrapper = shallow(<CourseList />)
    expect(wrapper.find(CourseListRow).get(2).props.textFirstCell).toBe('No course available yet')
  })
})
