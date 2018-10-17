import React, { Component } from 'react';
<<<<<<< HEAD
=======
import logo from './logo.svg';
import Prix from "./Prix"
import Appelapi from "./AppelAPI"
import Colorbutton from "./Colorbutton"

>>>>>>> 4e5a888cd2f43d071c722ffba88bf1cf71a29c47
import './App.css';
import Header from './Header'
import BoutonPulse from './BoutonPulse'

class App extends Component {
  render() {
  // const selectedprice = (prix) => {}
    return (
<<<<<<< HEAD
      <div>
        <Header />
        <BoutonPulse />
      </div>
=======
		<div className="App">
			<img src='http://image.noelshack.com/fichiers/2018/41/5/1539339298-wine.jpg'  alt="logprincipal" className="logoWine" />
			<h3>Votre bouteille sans prise de tête</h3>
			
			<Prix  />

			<p></p>
			
			<Colorbutton />

			<Appelapi />



		</div>
>>>>>>> 4e5a888cd2f43d071c722ffba88bf1cf71a29c47
    );
  }
}

export default App;