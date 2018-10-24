import React, { Component } from 'react';
//import Header from "./Header";
import Carte from "./Carte";
import Prix from "./Prix"
import Colorbutton from "./Colorbutton"
import './App.css';
// import BoutonReset from "./BoutonReset"
import  Searchbar from './Searchbar';

class App extends Component {
  state = {
    color: "Red Wine",
    subStyle: ""
  };
  liftColor = color => {
    this.setState({ color: color });
  };
  liftsubStyle = subStyle => {
    this.setState({ subStyle: subStyle });
  };
  render() {
  //const selectedprice = (prix) => {}
    return (
		<div className="App">

			<img src='http://image.noelshack.com/fichiers/2018/41/5/1539339298-wine.jpg'  alt="logprincipal" className="logoWine" />
			<h3>Votre bouteille sans prise de tête</h3>
			
			
			<Prix  />
			<p></p>
			<Colorbutton liftColor={this.liftColor} liftsubStyle={this.liftsubStyle} />
      <p></p>
      <div className="Searchbar">
      <Searchbar />
      </div>
      
      <p></p>
			{/* <Appelapi color={this.state.color} subStyle={this.state.subStyle} /> */}
      <Carte />
     
      {/* <BoutonReset /> */}

		</div>
    );
  }
}

export default App;