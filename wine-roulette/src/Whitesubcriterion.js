import React, { Component } from 'react';
//import Appelapi from "./AppelAPI"


class Whitesubcriterion extends Component {
    constructor() {
    super();
    this.state = {whiteSubCriterion: ""}
}

whiteSubCriterionSelection = subStyle => {
	this.setState ({whiteSubCriterion: subStyle});
	this.props.liftsubStyle(subStyle);
}

  render() {
  	return  (
			<div>
				<button onClick={() => this.whiteSubCriterionSelection(['XD - Extra Dry'])}>Sec</button>
				<button onClick={() => this.whiteSubCriterionSelection(['D - Dry','M - Medium'])}>Demi-sec</button>
				<button onClick={() => this.whiteSubCriterionSelection(['S - Sweet'])}>Moelleux</button>
				<button onClick={() => this.whiteSubCriterionSelection([null])}>Surprise !</button>
			</div>
	)
  }
}




export default Whitesubcriterion;