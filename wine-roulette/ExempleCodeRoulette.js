import React, { Component } from 'react';

class Livre extends Component {

	constructor(props) {
    super(props);
     this.state = {items: [],
     				bouquins:[],
     				result:''}

     }

     componentDidMount() {

     	fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret&rows=200')
     	 .then(response => response.json())
     	 .then( json => {
     	 	this.setState({
			     	 		items: json.records.map (item => item.fields.titre)
			     	 		})
     	 })
     	}


 	Roulette = () => {
 		this.setState({result:this.state.items[Math.floor(Math.random() * (200) + 1)]})
 	}
 

	render() {
		console.log(this.state.result)
		console.log(Math.floor(Math.random() * (200) + 1))

		return(

			<div>

			<button onClick={this.Roulette}>Roulette</button>

			<p>{this.state.result}</p>

			</div>

			)
	}
}

export default Livre;

