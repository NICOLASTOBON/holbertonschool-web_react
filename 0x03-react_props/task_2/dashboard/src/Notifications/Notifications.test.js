import React from 'react'
import { shallow } from 'enzyme'

import Notifications from './Notifications'
import NotificationItem from './NotificationItem'

describe('Notifications component', () => {
  const wrapper = shallow(<Notifications />)
  it('verify that Notifications renders three list items', () => {
    expect(wrapper.find(NotificationItem).length).toBe(3)
  })
  it('Notifications renders the text: Here is the list of notifications', () => {
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications')
  })
})