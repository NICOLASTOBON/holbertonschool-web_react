import React from 'react'
import PropTypes from 'prop-types'

function NotificationItem ({type, html, value, markAsRead}) {
  return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}>{value}</li>
  )
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

NotificationItem.defaultProps = {
  type: 'default'
}

export default NotificationItem