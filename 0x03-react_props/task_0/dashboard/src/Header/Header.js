import React from 'react'
import logo from '../assets/logo.jpg'

import './Header.css';

function Header() {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} alt="Holberton Logo"/>
        <h1>School dashboard</h1>
      </header>
    </React.Fragment>
  );
}

export default Header;
