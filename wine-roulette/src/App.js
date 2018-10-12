import React, { Component } from 'react';
import logo from './logo.svg';

//import Bouton from './Bouton';
import Bouton from "./boutonGenerantURL/Bouton"
// import Winelist from "./AffichageListeVin/Winelist"
import './App.css';

class App extends Component {
  render() {
    return (


      <div className="App">
      <h3>Wine Roulette : votre bouteille sans prise de tête</h3>

        <header className="App-header">

          <img src='http://blog.mabouteille.fr/wp-content/uploads/2015/11/mon-vin-personnalise-1024x512.png' className="App-logo" alt="logo" />
        
        </header>

        


        <Bouton />

      </div>
    );
  }
}

export default App;