/*
 *
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'

//components
import App from './App'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList'

describe('<App />', () => {

  describe('Main components', () => {
    it('check if Notifications component exists', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find(Notifications).exists()).toBe(true);
    })
    it('check if Header component exists', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find(Header).exists()).toBe(true);
    })
    it('check if Login component exists when isLoggedIn by default is false', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find(Login).exists()).toBe(true);
    })
    it('check if Footer component exists', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find(Footer).exists()).toBe(true);
    })
  })

  describe('App Component with props', () => {
    it('when isLoggedIn is false', () => {
      const wrapper = shallow(<App isLoggedIn={false} />)
      expect(wrapper.find(Login).exists()).toBe(true);
    })
    it('when isLoggedIn is true', () => {
      const wrapper = shallow(<App isLoggedIn={true} />)
      expect(wrapper.find(CourseList).exists()).toBe(true)
      expect(wrapper.find(Login).exists()).toBe(false)
    })
    it("checks behavior of logOut prop", () => {
      const map = {};
      window.addEventListener = jest.fn().mockImplementation((event, cb) => {
        map[event] = cb;
      });
      window.alert = jest.fn();
  
      const testProps = {
        logOut: jest.fn()
      }
  
      const wrapper = shallow(<App isLoggedIn={true} {...testProps} />);
      map.keydown({ ctrlKey: true, key: "h" });
      expect(window.alert).toHaveBeenCalledWith("Logging you out");
      expect(testProps.logOut).toHaveBeenCalled();
      window.alert.mockRestore();
    });
  })
})
