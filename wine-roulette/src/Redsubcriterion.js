import React, { Component } from 'react';
// import Appelapi from "./AppelAPI"

class Redsubcriterion extends Component {
    constructor() {
    super();
    this.state = {redSubCriterion: ''}

}

redSubCriterionSelection = (subStyle) => {
	this.setState ({redSubCriterion: subStyle})
}

  render() {
  	
  	return  (
			<div>
				<button onClick={() => this.redSubCriterionSelection('Fruity')}>Fruité</button>
				<button onClick={() => this.redSubCriterionSelection('Smooth')}>léger</button>
				<button onClick={() => this.redSubCriterionSelection('Rich')}>Riche</button>
				<button onClick={() => this.redSubCriterionSelection('Fullbodied')}>Corsé</button>
				<button onClick={() => this.redSubCriterionSelection('Mediumbodied')}>Doux</button>
				{/*<Appelapi redSubCriterion={this.state.redSubCriterion} />*/}
			</div>
	)
  }
}

export default Redsubcriterion;