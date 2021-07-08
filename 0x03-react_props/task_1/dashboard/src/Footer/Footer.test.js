import React from 'react'
import { shallow } from 'enzyme'

import Footer from './Footer'

describe('App component', () => {
  const wrapper = shallow(<Footer />)
  it('verify that Footer renders a div with the class App-footer', () => {
    expect(wrapper.find('.App-footer').exists()).toBe(true);
    expect(wrapper.find('.App-footer p').text()).toContain('Copyright');
  })
})