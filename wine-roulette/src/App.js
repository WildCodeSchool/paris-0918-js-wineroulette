import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import BoutonPulse from './BoutonPulse'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BoutonPulse />
      </div>
    );
  }
}

export default App;
