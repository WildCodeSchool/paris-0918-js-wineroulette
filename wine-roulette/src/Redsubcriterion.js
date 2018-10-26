import React, { Component } from 'react';
//import Appelapi from "./AppelAPI"

class Redsubcriterion extends Component {
    constructor() {
    super();
    this.state = {redSubCriterion: ''}

}

redSubCriterionSelection = subStyle => {
	this.setState ({redSubCriterion: subStyle});
	this.props.liftsubStyle(subStyle);
};

  render() {
  	return  (
			<div>
				<button onClick={() => this.redSubCriterionSelection(['Full-bodied & Smooth', 'Full-bodied & Firm'])}>Corsé</button>
				<button onClick={() => this.redSubCriterionSelection(['Light-bodied & Fruity', 'Medium-bodied & Fruity'])}>léger</button>
				<button onClick={() => this.redSubCriterionSelection([null])}>Surprise !</button>

				{/* <button onClick={() => this.redSubCriterionSelection('Fruity')}>Fruité</button> */}
				{/* <button onClick={() => this.redSubCriterionSelection('Smooth')}>léger</button> */}
				{/* <button onClick={() => this.redSubCriterionSelection('Rich')}>Riche</button> */}
				{/* <button onClick={() => this.redSubCriterionSelection('Fullbodied')}>Corsé</button> */}
				{/* <button onClick={() => this.redSubCriterionSelection('Mediumbodied')}>Doux</button> */}
			</div>
	)
  }
}

export default Redsubcriterion;