import React, { Component } from 'react';
import wine from './wine.png';
import './Header.css'

class Header extends Component {
    render() {
      return (
        <div className="Header">
            <header className="App-header">
            <img src={wine} className="Header-logo" alt="logo" />

            </header>
        </div>
      );
    }
  }
  
  export default Header;