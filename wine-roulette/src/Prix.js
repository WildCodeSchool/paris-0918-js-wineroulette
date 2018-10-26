import React, { Component } from 'react';

class Prix extends Component {
	constructor() {
    super();
    this.state = {minprix: 2000, maxprix:50000}
}

PriceSelection = (minprix, maxprix) => {
    this.setState({ minprix: minprix, maxprix: maxprix });
    this.props.liftPrice(minprix, maxprix);
	// (e).preventDefault()
}

render() {
// balise html le fait : https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/range
// localstorage
  	return  (
		<div>
			<button onClick={() => this.PriceSelection(2000,50000)}>Plus de 20$</button>
			<button onClick={() => this.PriceSelection(1000,1999)}>Entre 10 et 20$</button>
			<button onClick={() => this.PriceSelection(0,999)}>moins de 10$</button>
			<button onClick={() => this.PriceSelection(0,50000)}>Tous les prix</button>
		</div>
		)
	}
}
export default Prix;