import React from 'react'
import { shallow } from 'enzyme'

import Notifications from './Notifications'
import NotificationItem from './NotificationItem'

describe('<Notifications />', () => {
  it('The menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('.menuItem').exists()).toBe(true)
  })
  it('The div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('div.Notifications').exists()).toBe(true)
  })
  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find(NotificationItem).length).toBe(3)
  })
  it('Notifications renders the text: Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications')
  }),
  it('The menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('.menuItem').exists()).toBe(true)
  })
  it('The div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('div.Notifications').exists()).toBe(false)
  })
})