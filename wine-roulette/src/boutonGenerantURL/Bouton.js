import React, { Component } from 'react';
// import Bouton from "../boutonGenerantURL/Bouton"
//import Winelist from "../AffichageListeVin/Winelist"
// import "./Winelist.css"

// const url = 'https://lcboapi.com/products?q=red+wine+chile+Sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'

class Bouton extends Component {
  constructor() {
    super();
    this.state = {
      red:true,
      white:false,
      pink: false,
      Bubble:false,
      isLoaded: false,
      items: [],
      url:'https://lcboapi.com/products?q=red&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'
	};
};
  

	redWineSelection = () => {
	this.setState ({red: !this.state.red,
		            white:false,
		            pink: false,
		            Bubble:false,
		        	url:'https://lcboapi.com/products?q=red&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
	console.log(this.state.url)}

	whiteWineSelection =() => {
    this.setState ({red: false,
                    white:!this.state.white,
                    pink: false,
                    Bubble:false,
                	url:'https://lcboapi.com/products?q=white&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})

  console.log(this.state.url)}
 	pinkWineSelection =() => {
    this.setState ({red: false,
                    white:false,
                    pink: !this.state.whpinkite,
                    Bubble:false,
                	url:'https://lcboapi.com/products?q=pink_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
  console.log(this.state.url)}
	bubbleWineSelection =() => {
    this.setState ({red: false,
                    white:false,
                    pink: false,
                    Bubble:!this.state.Bubble,
                	url:'https://lcboapi.com/products?q=bubble&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
 console.log(this.state.url) }


	// urlchange = () => {
	//     if (this.state.red) this.setState ({url:'https://lcboapi.com/products?q=red&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
	//     else if (this.state.white) this.setState ({url:'https://lcboapi.com/products?q=white&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
	//     else if (this.state.pink) this.setState ({url:'https://lcboapi.com/products?q=pink_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})  
	//     else if (this.state.Bubble) this.setState ({url:'https://lcboapi.com/products?q=bubble&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
	//     console.log(this.state.url)
	//      }
  componentWillMount() {
  	
    fetch(this.state.url)
      .then(res => res.json())
      .then((json) => {
          	this.setState({
	            isLoaded: true,
	            items: json.result
                });
	   })

  }

  Reload() {
 	this.setState({ url:this.state.url });
 }


  render() {

  	const {isLoaded, items } = this.state;
    //console.log(this.state.url2)

    if (!isLoaded) return <div>Loading...</div>;

     else {
        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.bubbleWineSelection}>Petillant</button>
				<p></p>
				<button onClick={ this.Reload.bind(this) }>Roulette</button>

				<ul>

              {items.map((item, poulet) => (
                <li>
                    <p>Vin numero : {poulet+1}</p>
                    <p> Domaine :  {item.name}</p>
                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
                    <img src={item.image_url} alt="photo du vin"/>
                </li>))}
             
            </ul>	
			</div>

      );
    }
  }
}
export default Bouton;




