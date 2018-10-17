import React, { Component } from 'react';
import Appelapi from "./AppelAPI"


class Whitesubcriterion extends Component {
    constructor() {
    super();
    this.state = {whiteSubCriterion: ""}
}

whiteSubCriterionSelection = (subStyle) => {
	this.setState ({whiteSubCriterion: subStyle})
}

  render() {
  	return  (
			<div>
				<button onClick={() => this.whiteSubCriterionSelection('Xdry')}>Sec</button>
				<button onClick={() => this.whiteSubCriterionSelection('Dry')}>Demi-sec</button>
				<button onClick={() => this.whiteSubCriterionSelection('Sweet')}>Moelleux</button>
				{/*<Appelapi whiteSubCriterion={this.state.whiteSubCriterion} />*/}
			</div>
	)
  }
}




export default Whitesubcriterion;