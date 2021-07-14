import React from 'react'

import { getLatestNotification } from '../utils/utils'
import closeImg from '../assets/close-icon.png'
import NotificationItem from './NotificationItem'

import './Notifications.css'

function Notifications({ displayDrawer }) {
  const setHtml = {
    __html: getLatestNotification()
  }
  // inline styles for button close
  const stylesButton = {
    float: 'right',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  }

  //functions handle
  const handleClick = () =>console.log('Close button has been clicked')

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            type="button"
            aria-label="Close"
            style={stylesButton}
            onClick={handleClick}
          >
            <img src={closeImg} alt="Close Button" style={{height: '3vh'}}/>
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available"/>
            <NotificationItem type="urgent" value="New resume available"/>
            <NotificationItem type="urgent" html={setHtml}/>
          </ul>
        </div>
      )}
    </>
  )
}

Notifications.defaultProps = {
  displayDrawer: false
}

export default Notifications