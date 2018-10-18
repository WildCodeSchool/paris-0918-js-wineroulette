import React, { Component } from 'react';
import Appelapi from "./AppelAPI"


class Rosesubcriterion extends Component {
    constructor() {
    super();
    this.state = {roseSubCriterion: ""}
}

roseSubCriterionSelection = (subStyle) => {
	this.setState ({roseSubCriterion: subStyle})
}

  render() {

  	return  (
			<div>
				<button onClick={() => this.roseSubCriterionSelection('Light')}>Light</button>
				<button onClick={() => this.roseSubCriterionSelection('Full-bodied')}>Full-bodied</button>
				<button onClick={() => this.roseSubCriterionSelection('Aromatic & Flavourful')}>Aromatic and Flavourful</button>
				{/*<Appelapi roseSubCriterion={this.state.roseSubCriterion} />*/}

			</div>
	)
  }
}




export default Rosesubcriterion;