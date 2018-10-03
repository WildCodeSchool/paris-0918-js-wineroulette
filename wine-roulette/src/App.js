import React, { Component } from 'react';
import logo from './logo.svg';

//import Bouton from './Bouton';
import Winelist from "./AffichageListeVin/Winelist"
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Winelist />

      </div>
    );
  }
}

export default App;