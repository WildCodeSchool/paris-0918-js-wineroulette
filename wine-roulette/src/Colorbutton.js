import React, { Component } from 'react';
import Redsubcriterion from "./Redsubcriterion";
import Whitesubcriterion from "./Whitesubcriterion";
import Rosesubcriterion from "./Rosesubcriterion";
import Champsubcriterion from "./Champsubcriterion";

class Colorbutton extends Component {
    constructor() {
    super();
	this.state = {color: 'Red Wine',
				  subCategory: ''}
}

ColorSelection = (color, subCategory) => {
	this.setState({color: color});
	this.setState({subCategory: subCategory})
	this.props.liftColor(color);
	this.props.liftsubStyle("");
	this.props.liftsubCategory(subCategory);
	
};


  render() {

// ESSAYER DE METTRE DE NE PAS SE REPÉTER
  	if (this.state.color === 'Red Wine') return  (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine', 'style')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine', 'sugar_content')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine', 'style')}>Rosé</button>
			<button onClick={() => this.ColorSelection('Champagne', 'sugar_content')}>Petillant</button>
			<p> </p>
			<Redsubcriterion liftsubStyle={this.props.liftsubStyle} />

			{/* <Appelapi color={this.state.color} /> */}
		</div>
		)

	else if (this.state.color === 'White Wine') return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine', 'style')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine', 'sugar_content')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine', 'style')}>Rosé</button>
			<button onClick={() => this.ColorSelection('Champagne', 'sugar_content')}>Petillant</button>
			<p> </p>
			<Whitesubcriterion  liftsubStyle={this.props.liftsubStyle}/>
		</div>
		)

	else if (this.state.color === 'Rosé Wine') return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine', 'style')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine', 'sugar_content')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine', 'style')}>Rosé</button>
			<button onClick={() => this.ColorSelection('Champagne', 'sugar_content')}>Petillant</button>
			<p> </p>
			<Rosesubcriterion liftsubStyle={this.props.liftsubStyle}/>
		</div>
		)



	else if (this.state.color === 'Champagne') return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('Red Wine', 'style')}>Rouge</button>
			<button onClick={() => this.ColorSelection('White Wine', 'sugar_content')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine', 'style')}>Rosé</button>
			<button onClick={() => this.ColorSelection('Champagne', 'sugar_content')}>Petillant</button>
			<p> </p>
			<Champsubcriterion liftsubStyle={this.props.liftsubStyle}/>
		</div>
		)

	else return (
		<div>
			<p></p>
			<button onClick={() => this.ColorSelection('red', 'style')}>Rouge</button>
			<button onClick={() => this.ColorSelection('white', 'sugar_content')}>Blanc</button>
			<button onClick={() => this.ColorSelection('Rosé Wine', 'style')}>Rosé</button>
			<button onClick={() => this.ColorSelection('Champagne', 'sugar_content')}>Petillant</button>
			<p></p>
		</div>
		)
  }
}
export default Colorbutton;


