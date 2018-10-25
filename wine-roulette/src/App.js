import React, { Component } from 'react';
//import Header from "./Header";
import Carte from "./Carte";
//import logo from './logo.svg';
import Prix from "./Prix"
//import Appelapi from "./AppelAPI"
import Colorbutton from "./Colorbutton"
import './App.css';
import BoutonReset from "./BoutonReset"

class App extends Component {
  state = {
    color: "Red Wine",
    subStyle: "",
    minprix: 2000,
    maxprix: 50000
  };
  liftColor = color => {
    this.setState({ color: color });
  };
  liftsubStyle = subStyle => {
    this.setState({ subStyle: subStyle });
  };
  liftPrice = (minprix, maxprix) => {
    this.setState({ minprix: minprix, maxprix: maxprix });
  };
  render() {
  //const selectedprice = (prix) => {}
    return (
		<div className="App">

			<img src='http://image.noelshack.com/fichiers/2018/41/5/1539339298-wine.jpg'  alt="logprincipal" className="logoWine" />
			<h3>Votre bouteille sans prise de tête</h3>
			
			
			 

			<p></p>
			
			<Colorbutton liftColor={this.liftColor} liftsubStyle={this.liftsubStyle} />

      <Prix liftPrice={this.liftPrice} />

			{/* <Appelapi color={this.state.color} subStyle={this.state.subStyle} /> */}
      <Carte color={this.state.color}
          subStyle={this.state.subStyle}
          minprix={this.state.minprix}
          maxprix={this.state.maxprix}/>
     
      <BoutonReset />

		</div>
    );
  }
}

export default App;