import React from 'react'
import { shallow } from 'enzyme'

import Notifications from './Notifications'

describe('Notifications component', () => {
  const wrapper = shallow(<Notifications />)
  it('verify that Notifications renders three list items', () => {
    expect(wrapper.find('.Notifications li').length).toBe(3)
  })
  it('Notifications renders the text: Here is the list of notifications', () => {
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications')
  })
})