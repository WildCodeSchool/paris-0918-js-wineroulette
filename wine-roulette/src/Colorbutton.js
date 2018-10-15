import React, { Component } from 'react';
// import Bouton from "../boutonGenerantURL/Bouton"
import Redsubcriterion from "./Redsubcriterion"
import Whitesubcriterion from "./Whitesubcriterion"
// import "./bouton.css"

class Colorbutton extends Component {
    constructor() {
    super();
    this.state = {red: true,
		            white:false,
		            pink: false,
		            champagne:false}
}

redWineSelection = () => {
	this.setState ({red: !this.state.red,
		            white:false,
		            pink: false,
		            champagne:false})
}

whiteWineSelection =() => {
    this.setState ({red: false,
                    white:!this.state.white,
                    pink: false,
                    champagne:false})
}

pinkWineSelection =() => {
    this.setState ({red: false,
                    white:false,
                    pink: !this.state.pink,
                    champagne:false})
}

champagneWineSelection =() => {
    this.setState ({red: false,
                    white:false,
                    pink: false,
                    champagne:!this.state.champagne})
}

  render() {

  	if (this.state.red) return  (
		<div>
			<button onClick={this.redWineSelection}>Rouge</button>
			<button onClick={this.whiteWineSelection}>Blanc</button>
			<button onClick={this.pinkWineSelection}>Rosé</button>
			<button onClick={this.champagneWineSelection}>Petillant</button>
			<p> sous-critère ROUGE</p>
			<Redsubcriterion onClick={()=> this.redWineSelection} />
		</div>
		)

	else if (this.state.white) return (
		<div>
			<button onClick={this.redWineSelection}>Rouge</button>
			<button onClick={this.whiteWineSelection}>Blanc</button>
			<button onClick={this.pinkWineSelection}>Rosé</button>
			<button onClick={this.champagneWineSelection}>Petillant</button>
			<p> sous-critère BLANC</p>
			<Whitesubcriterion />
		</div>
		)

	else return (
		<div>
			<button onClick={this.redWineSelection}>Rouge</button>
			<button onClick={this.whiteWineSelection}>Blanc</button>
			<button onClick={this.pinkWineSelection}>Rosé</button>
			<button onClick={this.champagneWineSelection}>Petillant</button>
			<p> Select a COLOR</p>
		</div>
		)
  }
}
export default Colorbutton;


