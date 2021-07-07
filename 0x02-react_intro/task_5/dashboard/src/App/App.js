import React from 'react'
import logo from '../assets/logo.jpg'

import { getFullYear, getFooterCopy } from '../utils/utils'
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} alt="Holberton Logo"/>
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email"/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password"/>
        <button type="button">OK</button>
      </main>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
