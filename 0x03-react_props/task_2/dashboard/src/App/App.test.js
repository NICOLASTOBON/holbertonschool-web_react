import React from 'react'
import { shallow } from 'enzyme'

//components
import App from './App'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'

describe('App component', () => {
  const wrapper = shallow(<App />)
  it('check if component App exists', () => {
    expect(wrapper.exists()).toBe(true);
  })
  it('check if Notifications component exists', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  })
  it('check if Header component exists', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  })
  it('check if Login component exists', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  })
  it('check if Footer component exists', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  })
})