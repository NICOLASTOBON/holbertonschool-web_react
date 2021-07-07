import React from 'react'

import { getLatestNotification } from '../utils/utils'
import closeImg from '../assets/close-icon.png'

import './Notifications.css'


function Notifications() {
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={setHtml}></li>
      </ul>
    </div>
  )
}

export default Notifications