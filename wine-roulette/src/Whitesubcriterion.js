import React, { Component } from 'react';


class Whitesubcriterion extends Component {
    constructor() {
    super();
    this.state = {
			        Sweet:false,
				    Xdry:false,
				    Dry:false}
}

	SweetwhiteWineSelection = () => {
	this.setState ({
			        Sweet:false,
				    Xdry:false,
				    Dry:false})
}

	XdrywhiteWineSelection = () => {
	this.setState ({
			        Sweet:false,
				    Xdry:false,
				    Dry:false})
}





	DrywhiteWineSelection = () => {
	this.setState ({
			        Sweet:false,
				    Xdry:false,
				    Dry:false})
}

  render() {
  	return  (
			<div>
				<button onClick={this.SweetwhiteWineSelection}>Fruité</button>
				<button onClick={this.XdrywhiteWineSelection}>léger</button>
				<button onClick={this.DrywhiteWineSelection}>Riche</button>
			</div>
	)
  }
}

export default Whitesubcriterion;