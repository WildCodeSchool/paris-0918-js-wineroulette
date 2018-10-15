import React, { Component } from 'react';

class Prix extends Component {

	constructor() {
    super();
    this.state = {trescher: false,
		          cher:false,
		          pascher: false,
		      	  iftrescher:{cher:false,pascher:false},
		      	  ifcher:{trescher:false,pascher:false},
		      	  ifpascher:{cher:false,trescher:false},}
}

tresWineSelection = () => {
	this.setState ({trescher: !this.state.trescher})
	this.setState (this.state.iftrescher)
}

cherWineSelection =() => {
	this.setState ({cher: !this.state.cher})
	this.setState (this.state.ifcher)


}

pascherWineSelection =() => {
	this.setState ({pascher: !this.state.pascher})
	this.setState (this.state.ifpascher)
}

render() {


// const selectedprice = this.props.

  	return  (
		<div>
			<button onClick={this.tresWineSelection}>Plus de 20$</button>
			<button onClick={this.cherWineSelection}>Entre 10 et 20$</button>
			<button onClick={this.pascherWineSelection}>moins de 10$</button>
		</div>
		)
	}
}
export default Prix;