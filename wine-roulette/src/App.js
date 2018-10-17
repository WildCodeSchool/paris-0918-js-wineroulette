import React, { Component } from 'react';
import logo from './logo.svg';
import Prix from "./Prix"
import Appelapi from "./AppelAPI"
import Colorbutton from "./Colorbutton"
import './App.css';
import Header from './Header'
import BoutonPulse from './BoutonPulse'

class App extends Component {
  render() {
  // const selectedprice = (prix) => {}
    return (
		<div className="App">

			<img src='http://image.noelshack.com/fichiers/2018/41/5/1539339298-wine.jpg'  alt="logprincipal" className="logoWine" />
			<h3>Votre bouteille sans prise de tête</h3>
			
			<Prix  />

			<p></p>
			
			<Colorbutton />

			<Appelapi />

      <BoutonPulse />



		</div>
    );
  }
}

export default App;