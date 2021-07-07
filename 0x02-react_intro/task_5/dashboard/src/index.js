import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App/App';
import Notifications from './Notifications/Notifications';

import './Globals.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
