import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

describe('Header component', () => {
  const wrapper = shallow(<Header />)
  it('verify that Header renders a div with the class App-header', () => {
    expect(wrapper.find('.App-header').exists()).toBe(true);
  })
})
