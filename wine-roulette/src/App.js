import React, { Component } from 'react';
import logo from './logo.svg';
import Prix from "./Prix"
import Colorbutton from "./Colorbutton"


//import Bouton from './Bouton';
//import Bouton from "./boutonGenerantURL/Bouton"
//import Winelist from "./AffichageListeVin/Winelist"
import './App.css';

class App extends Component {
  render() {

  // const selectedprice = (prix) => {}


    return (


		<div className="App">
			<img src='http://image.noelshack.com/fichiers/2018/41/5/1539339298-wine.jpg'  alt="sfsdqsd" className="logoWine" />
			<h3>Votre bouteille sans prise de tête</h3>

			<Prix  />
			<p></p>
			<Colorbutton />

		</div>
    );
  }
}

export default App;