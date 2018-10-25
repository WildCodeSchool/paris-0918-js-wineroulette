import React, { Component } from 'react';
import Redsubcriterion from "./Redsubcriterion";
import Whitesubcriterion from "./Whitesubcriterion";
import Rosesubcriterion from "./Rosesubcriterion";
import Champsubcriterion from "./Champsubcriterion";

class Colorbutton extends Component {
    constructor() {
    super();
    this.state = {color: 'Red Wine'}
}

ColorSelection = color => {
	this.setState({color: color});
	this.props.liftColor(color);
	this.props.liftsubStyle('')
};

  render() {

// ESSAYER DE METTRE DE NE PAS SE REPÉTER
  	if (this.state.color === 'Red Wine') return  (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine')}>Rosé</button>
			<button onClick={() => this.ColorSelection(['Sparkling Wine', 'Champagne'])}>Petillant</button>
			<p> </p>
			<Redsubcriterion liftsubStyle={this.props.liftsubStyle} />

			{/* <Appelapi color={this.state.color} /> */}
		</div>
		)

	else if (this.state.color === 'White Wine') return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine')}>Rosé</button>
			<button onClick={() => this.ColorSelection(['Sparkling Wine', 'Champagne'])}>Petillant</button>
			<p> </p>
			<Whitesubcriterion  liftsubStyle={this.props.liftsubStyle}/>
			{/* <Appelapi color={this.state.color} /> */}
		</div>
		)

	else if (this.state.color === 'Rosé Wine') return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine')}>Rosé</button>
			<button onClick={() => this.ColorSelection(['Sparkling Wine', 'Champagne'])}>Petillant</button>
			<p> </p>
			<Rosesubcriterion liftsubStyle={this.props.liftsubStyle}/>
			{/* <Appelapi color={this.state.color} /> */}
		</div>
		)



	else if (this.state.color === 'Sparkling Wine') return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine')}>Rosé</button>
			<button onClick={() => this.ColorSelection(['Sparkling Wine', 'Champagne'])}>Petillant</button>
			<p> </p>
			<Champsubcriterion liftsubStyle={this.props.liftsubStyle}/>
			{/* <Appelapi color={this.state.color} /> */}
		</div>
		)

	else return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('red')}>Rouge</button>
			<button onClick={() => this.ColorSelection('white')}>Blanc</button>
			<button onClick={() => this.ColorSelection('pink')}>Rosé</button>
			<button onClick={() => this.ColorSelection('Champagne')}>Petillant</button>
			<p></p>
		</div>
		)
  }
}
export default Colorbutton;


