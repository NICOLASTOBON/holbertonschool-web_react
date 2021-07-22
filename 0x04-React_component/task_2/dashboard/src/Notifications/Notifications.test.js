import React from 'react'
import { shallow } from 'enzyme'

import Notifications from './Notifications'
import NotificationItem from './NotificationItem'

import { getLatestNotification } from "../utils/utils";

const htmlObj = {
  __html: getLatestNotification(),
};
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: htmlObj},
];

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
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)
    expect(wrapper.find(NotificationItem).length).toBe(3)
  })

  it('Notifications renders the text: Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications')
  })

  it('The menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('.menuItem').exists()).toBe(true)
  })

  it('The div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('div.Notifications').exists()).toBe(false)
  })

  it('Renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('.Notifications p').exists()).toBe(true)
    expect(wrapper.find('.Notifications p').text()).toBe('No new notification for now')
  })

  it('verifies console.log output when calling the function markAsRead on an instance of the component', () => {
    const spy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  })
})