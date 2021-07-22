import React from 'react'
import { shallow } from 'enzyme'

import NotificationItem from './NotificationItem'

describe('<NotificationItem />', () => {
  it('Passing dummy type and value props, it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />)
    expect(wrapper.props()['data-notification-type']).toBe('default')
    expect(wrapper.props()['children']).toBe('test')
  })
  it('Passing a dummy html prop, it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />)
    expect(wrapper.html()).toContain('<u>test</u>')
  })
})