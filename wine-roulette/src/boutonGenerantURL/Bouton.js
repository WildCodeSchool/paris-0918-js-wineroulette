import React, { Component } from 'react';
import "./bouton.css";

class Bouton extends Component {
	constructor(){
		super();
		this.state = {
						red:true,
					    white:false,
						pink: false,
						Bubble:false
					};
	}

	redWineSelection = () => {
		/*if (this.state.red ===true) return */
		this.setState ({red: !this.state.red,
					    white:false,
						pink: false,
						Bubble:false})
	}

	whiteWineSelection =() => {
		this.setState ({red: false,
					    white:!this.state.white,
						pink: false,
						Bubble:false})

	}
	pinkWineSelection =() => {
		this.setState ({red: false,
					    white:false,
						pink: !this.state.whpinkite,
						Bubble:false})

	}
	bubbleWineSelection =() => {
		this.setState ({red: false,
					    white:false,
						pink: false,
						Bubble:!this.state.Bubble})

	}


	render() {

		const redWine = this.state.red;
		const whiteWine = this.state.white;
		const pinkWine = this.state.pink;
		const BubbleWine = this.state.Bubble;

		const redWineON = "red"+this.state.red;
		const whiteWineON = "white"+ this.state.white;
		const pinkWineON = "pink"+ this.state.pink;
		const BubbleWineON =  "bubble"+this.state.Bubble;

		// console.log("redWine " , redWine, redWineON);
		// console.log("whiteWine " + whiteWine, whiteWine, whiteWineON);
		// console.log("pinkWine " + pinkWine, pinkWine, pinkWineON);
		// console.log("BubbleWine " + BubbleWine, BubbleWine, BubbleWineON);

		const WriteTheColor = () => {
			if (redWine) return 'red';
			else if (whiteWine) return 'white';
			else if (pinkWine) return 'ping';
			else if (BubbleWine) return 'bubble';


		}

		return (

			<div>
				<button onClick={this.redWineSelection} className={redWineON} >Rouge{redWine}</button>
				<button onClick={this.whiteWineSelection} className={whiteWineON} >Blanc{whiteWine}</button>
				<button onClick={this.pinkWineSelection} className={pinkWineON} >Rosé{pinkWine}</button>
				<button onClick={this.bubbleWineSelection}className={BubbleWineON} >Petillant{BubbleWine}</button>

				<p>http://lcboapi.com/products?q={WriteTheColor()}+wine+france</p> 

			</div>
			)
	}
};

export default Bouton;