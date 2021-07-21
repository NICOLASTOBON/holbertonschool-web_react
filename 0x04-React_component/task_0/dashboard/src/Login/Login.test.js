import React from 'react'
import { shallow } from 'enzyme'

import Login from './Login'

describe('App component', () => {
  const wrapper = shallow(<Login />)
  it('verify that Login renders a div with the class App-body', () => {
    expect(wrapper.find('.App-body').exists()).toBe(true);
    expect(wrapper.find('.App-body input').exists()).toBe(true);
    expect(wrapper.find('.App-body label').exists()).toBe(true);
  })
})