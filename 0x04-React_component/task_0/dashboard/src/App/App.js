import React from 'react'
import PropTypes from 'prop-types'

import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'

import { getLatestNotification } from '../utils/utils'

const htmlObj = { __html: getLatestNotification() }

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
]

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: htmlObj},
];

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <hr/>
          {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
