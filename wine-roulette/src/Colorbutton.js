import React, { Component } from 'react';
// import Bouton from "../boutonGenerantURL/Bouton"
import Redsubcriterion from "./Redsubcriterion"
import Whitesubcriterion from "./Whitesubcriterion"
// import "./bouton.css"

class Colorbutton extends Component {
    constructor() {
    super();
    this.state = {color: 'red'}
}

ColorSelection = (color) => {
	this.setState ({color: color})
}

  render() {

  	if (this.state.color === 'red') return  (
		<div>
			<p>Composant color</p>
			<button onClick={() => this.ColorSelection('red')}>Rouge</button>
			<button onClick={() => this.ColorSelection('white')}>Blanc</button>
			<button onClick={() => this.ColorSelection('pink')}>Rosé</button>
			<button onClick={() => this.ColorSelection('champagne')}>Petillant</button>
			<p> sous-Composant color if ROUGE </p>
			<Redsubcriterion />
		</div>
		)

	else if (this.state.color === 'white') return (
		<div>
			<p>Composant color</p>
			<button onClick={() => this.ColorSelection('red')}>Rouge</button>
			<button onClick={() => this.ColorSelection('white')}>Blanc</button>
			<button onClick={() => this.ColorSelection('pink')}>Rosé</button>
			<button onClick={() => this.ColorSelection('champagne')}>Petillant</button>
			<p> sous-Composant color if BLANC</p>
			<Whitesubcriterion />
		</div>
		)

	else return (
		<div>
			<p>Composant color</p>
			<button onClick={() => this.ColorSelection('red')}>Rouge</button>
			<button onClick={() => this.ColorSelection('white')}>Blanc</button>
			<button onClick={() => this.ColorSelection('pink')}>Rosé</button>
			<button onClick={() => this.ColorSelection('champagne')}>Petillant</button>
			<p> Select a COLOR</p>
		</div>
		)
  }
}
export default Colorbutton;


