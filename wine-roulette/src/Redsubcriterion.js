import React, { Component } from 'react';

class Redsubcriterion extends Component {
    constructor() {
    super();
    this.state = {
			      Fruity:false,
			      Smooth: false,
			      Rich:false,
			      Fullbodied:false,
			      Mediumbodied:false}
}

FruityredWineSelection = () => {
	this.setState ({
		      Fruity:!this.state.Fruity,
		      Smooth: false,
		      Rich:false,
		      Fullbodied:false,
		      Mediumbodied:false})
}

SmoothredWineSelection =() => {
	this.setState ({
		      Fruity:false,
		      Smooth: !this.state.Smooth,
		      Rich:false,
		      Fullbodied:false,
		      Mediumbodied:false})
}

RichredWineSelection =() => {
	this.setState ({
		      Fruity:false,
		      Smooth: false,
		      Rich:!this.state.Rich,
		      Fullbodied:false,
		      Mediumbodied:false})
}

FullbodiedredWineSelection =() => {
	this.setState ({
		      Fruity:false,
		      Smooth: false,
		      Rich:false,
		      Fullbodied:!this.state.chaFullbodiedmpagne,
		      Mediumbodied:false})
}

MediumbodiedredWineSelection =() => {
	this.setState ({
		      Fruity:false,
		      Smooth: false,
		      Rich:false,
		      Fullbodied:false,
		      Mediumbodied:!this.state.Mediumbodied})
}

  render() {
  	// const name ={this.props.redWineSelection}
  	return  (
			<div>
				<button onClick={this.FruityredWineSelection}>Fruité</button>
				<button onClick={this.SmoothredWineSelection}>léger</button>
				<button onClick={this.RichredWineSelection}>Riche</button>
				<button onClick={this.FullbodiedredWineSelection}>Corsé</button>
				<button onClick={this.MediumbodiedredWineSelection}>Doux</button>
			</div>
	)
  }
}

export default Redsubcriterion;