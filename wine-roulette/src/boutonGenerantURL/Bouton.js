import React, { Component } from 'react';
//import Winelist from "../AffichageListeVin/Winelist"
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

		this.boutonRED = React.createRef();
	}

	// 	UrlGenerator =() => {
	// 		const redWine = this.state.red;
	// 		const whiteWine = this.state.white;
	// 		const pinkWine = this.state.pink;
	// 		const BubbleWine = this.state.Bubble;
	// 		const WriteTheColor = () => {
	// 			if (redWine) return 'red';
	// 			else if (whiteWine) return 'white';
	// 			else if (pinkWine) return 'ping';
	// 			else if (BubbleWine) return 'bubble';
	// 			}
	// 		this.setState ({url:'http://lcboapi.com/products?q='+WriteTheColor()+'+wine'})
	// }

	render() {

		// const redWine = this.state.red;
		// const whiteWine = this.state.white;
		// const pinkWine = this.state.pink;
		// const BubbleWine = this.state.Bubble;
		// console.log(redWine,whiteWine,pinkWine,BubbleWine)

		// const redWineON = "red"+this.state.red;
		// const whiteWineON = "white"+ this.state.white;
		// const pinkWineON = "pink"+ this.state.pink;
		// const BubbleWineON =  "bubble"+this.state.Bubble;

		// const WriteTheColor = () => {
		// 	if (redWine) return 'red';
		// 	else if (whiteWine) return 'white';
		// 	else if (pinkWine) return 'ping';
		// 	else if (BubbleWine) return 'bubble';
		// 	}
//const superurl = 'http://lcboapi.com/products?q='+{WriteTheColor()}+'+wine+france&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'

		return (
			<div>

				<button ref={this.boutonRED}>Rouge</button>
				<button>Blanc</button>
				<button>Rosé</button>
				<button>Petillant</button>
			
			</div>
			)
	}
};

export default Bouton;


				// <button onClick={this.redWineSelection}>Rouge</button>
				// <button onClick={this.whiteWineSelection}>Blanc{whiteWine}</button>
				// <button onClick={this.pinkWineSelection}>Rosé{pinkWine}</button>
				// <button onClick={this.bubbleWineSelection}>Petillant{BubbleWine}</button>

				// <p>Hello {this.props.appeldewinelistAbouton}!</p>

				// <button onClick={this.UrlGenerator} >  GOOO </button>
				// <p></p>
				// <span>linkForBouton : {this.state.url}</span>	