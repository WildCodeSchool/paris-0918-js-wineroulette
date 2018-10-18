import React, { Component } from 'react';
// import Bouton from "../boutonGenerantURL/Bouton"
import Redsubcriterion from "./Redsubcriterion"
import Whitesubcriterion from "./Whitesubcriterion"
import Champsubcriterion from "./Champsubcriterion"
import Appelapi from "./AppelAPI"
// import "./bouton.css"

class Colorbutton extends Component {
    constructor() {
    super();
    this.state = {color: 'Red Wine'}
}

ColorSelection = (poulet) => {
	this.setState ({color: poulet})
}

  render() {

// ESSAYER DE METTRE DE NE PAS SE REPÉTER

  	if (this.state.color === 'Red Wine') return  (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine')}>Rosé</button>
			<button onClick={() => this.ColorSelection('champagne')}>Petillant</button>
			<p> </p>
			<Redsubcriterion />

			{/* <Appelapi color={this.state.color} /> */}
		</div>
		)

	else if (this.state.color === 'White Wine') return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine')}>Rosé</button>
			<button onClick={() => this.ColorSelection('champagne')}>Petillant</button>
			<p> </p>
			<Whitesubcriterion />
			{/* <Appelapi color={this.state.color} /> */}
		</div>
		)

	else if (this.state.color === 'Rosé Wine') return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine')}>Rosé</button>
			<button onClick={() => this.ColorSelection('champagne')}>Petillant</button>
			<p> </p>
			{/* <Appelapi color={this.state.color} /> */}
		</div>
		)



	else if (this.state.color === 'champagne') return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine')}>Rosé</button>
			<button onClick={() => this.ColorSelection('champagne')}>Petillant</button>
			<p> </p>
			<Champsubcriterion />
			{/* <Appelapi color={this.state.color} /> */}
		</div>
		)

	else return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('red')}>Rouge</button>
			<button onClick={() => this.ColorSelection('white')}>Blanc</button>
			<button onClick={() => this.ColorSelection('pink')}>Rosé</button>
			<button onClick={() => this.ColorSelection('champagne')}>Petillant</button>
			<p></p>
		</div>
		)
  }
}
export default Colorbutton;


