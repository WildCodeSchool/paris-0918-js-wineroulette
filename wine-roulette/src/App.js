import React, { Component } from 'react';
//import Header from "./Header";
import Carte from "./Carte";
import Prix from "./Prix"
import Colorbutton from "./Colorbutton"
import './App.css';
// import IntegrationReactSelect from "./IntegrationReactSelect"
// import BoutonReset from "./BoutonReset"
import  Searchbar from './Searchbar';

class App extends Component {
  state = {
    color: "Red Wine",
    subStyle: "",
    minprix: 2000,
    maxprix: 50000,
    searchbar: ""
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
  liftsearchbar = searchbar => {
    this.setState({searchbar: searchbar});
  }

  render() {
    return (
		<div className="App">

			<img src='http://image.noelshack.com/fichiers/2018/41/5/1539339298-wine.jpg'  alt="logprincipal" className="logoWine" />
			<h3>Votre bouteille sans prise de tête</h3>
			<p></p>
			<Colorbutton liftColor={this.liftColor} liftsubStyle={this.liftsubStyle} />
      <p></p>
      <div className="Searchbar">
      <Searchbar liftsearchbar={this.liftsearchbar} />
      </div>
      <p></p>
      <Prix liftPrice={this.liftPrice} />
      <p></p>
      <Carte color={this.state.color}
          subStyle={this.state.subStyle}
          minprix={this.state.minprix}
          maxprix={this.state.maxprix}/>
{/* BoutonReset crée une alerte en console */}
      {/* <BoutonReset /> */}
{/* BoutonReset crée une alerte en console */}
		</div>
    );
  }
}

export default App;