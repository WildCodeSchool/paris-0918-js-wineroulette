import React, { Component } from 'react';
//import Appelapi from "./AppelAPI"


class Rosesubcriterion extends Component {
    constructor() {
    super();
    this.state = {roseSubCriterion: ""}
}

roseSubCriterionSelection = (subStyle) => {
	this.setState ({roseSubCriterion: subStyle});
	this.props.liftsubStyle(subStyle);
};

  render() {

  	return  (
			<div>
				<button onClick={() => this.roseSubCriterionSelection(['Easygoing & Fruity'])}>Fruité</button>
				<button onClick={() => this.roseSubCriterionSelection(['Medium-bodied & Dry'])}>Sec</button>
				<button onClick={() => this.roseSubCriterionSelection(['Soft & Off-dry', null])}>Surprise !l</button>
			</div>
	)
  }
}




export default Rosesubcriterion;