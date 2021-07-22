import React from 'react'
import PropTypes from 'prop-types'
import icon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem'
import NotificationItemShape from './NotificationItemShape'

import './Notifications.css'

// displayDrawer, listNotifications
class Notifications extends React.Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  }

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  clickClose = () => {
    console.log("Close button has been clicked");
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {
    return (
      <>
        <div className="menuItem">Your notifications</div>
        {
          this.props.displayDrawer && (
            <div className="Notifications">
              {
                this.props.listNotifications.length > 0
                  ? (
                      <>
                        <p style={{ display: "inline" }}>
                          Here is the list of notifications
                        </p>
                        <button
                          style={{ float: "right", border: 'none', backgroundColor: 'transparent' }}
                          aria-label="Close"
                          onClick={this.clickClose}
                        >
                          <img src={icon} alt="" style={{ height: "3vh" }} />
                        </button>
                        <ul>
                          {this.props.listNotifications.map((notification) => (
                            <NotificationItem
                              key={notification.id}
                              type={notification.type}
                              value={notification.value}
                              html={notification.html}
                              markAsRead={() => { this.markAsRead(notification.id) }}
                            />
                          ))}
                        </ul>
                      </>
                    ) 
                  : <p>No new notification for now</p>}
            </div>
          )
        }
      </>
    );
  }
};

export default Notifications