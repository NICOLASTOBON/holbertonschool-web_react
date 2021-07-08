import React from 'react'
import { getFullYear, getFooterCopy } from '../utils/utils'
import './Footer.css';

function Footer() {
  return (
    <React.Fragment>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
