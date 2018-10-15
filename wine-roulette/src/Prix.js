import React, { Component } from 'react';
import Whitesubcriterion from "./Whitesubcriterion"
import Appelapi from "./AppelAPI"

class Prix extends Component {

	constructor() {
    super();
    this.state = {minprice: 0,
    			  maxprice:6000}
}

PriceSelection = (prixmin,prixmax) => {
	this.setState ({minprice: prixmin,
    			    maxprice: prixmax})

}

render() {
// balise html le fait : https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/range
// localstorage
  	return  (
		<div>
			<p>Composant prix</p>
			<button onClick={() => this.PriceSelection(2000,6000)}>Plus de 20$</button>
			<button onClick={() => this.PriceSelection(1000,1999)}>Entre 10 et 20$</button>
			<button onClick={() => this.PriceSelection(0,999)}>moins de 10$</button>
			<Appelapi 
				minprice={this.state.minprice} 
				maxprice={this.state.maxprice} />
		</div>
		)
	}
}
export default Prix;