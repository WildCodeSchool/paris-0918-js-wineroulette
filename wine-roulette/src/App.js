import React, { Component } from 'react';
<<<<<<< HEAD
=======
import Header from "./Header";
import Carte from "./Carte";
>>>>>>> 620f24f4574211b475aee74feb81e1769f5e8818
import logo from './logo.svg';
import Prix from "./Prix"
import Appelapi from "./AppelAPI"
import Colorbutton from "./Colorbutton"
<<<<<<< HEAD
=======

>>>>>>> 620f24f4574211b475aee74feb81e1769f5e8818
import './App.css';

class App extends Component {
  render() {
  // const selectedprice = (prix) => {}
    return (
		<div className="App">
<<<<<<< HEAD

=======
      <Header />
>>>>>>> 620f24f4574211b475aee74feb81e1769f5e8818
			<img src='http://image.noelshack.com/fichiers/2018/41/5/1539339298-wine.jpg'  alt="logprincipal" className="logoWine" />
			<h3>Votre bouteille sans prise de tête</h3>
			
			<Prix  />

			<p></p>
			
			<Colorbutton />

			<Appelapi />
<<<<<<< HEAD

      <BoutonPulse />

=======
      <Carte />
>>>>>>> 620f24f4574211b475aee74feb81e1769f5e8818


		</div>
    );
  }
}

export default App;