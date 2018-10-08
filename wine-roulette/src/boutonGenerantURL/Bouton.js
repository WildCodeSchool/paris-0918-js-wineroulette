import React, { Component } from 'react';
// import Bouton from "../boutonGenerantURL/Bouton"
//import Winelist from "../AffichageListeVin/Winelist"
import "../AffichageListeVin/Winelist.css"

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
      items: []
	};
};

  

	redWineSelection = () => {
	this.setState ({red: !this.state.red,
		            white:false,
		            pink: false,
		            Bubble:false,
		            })
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


	// urlchange = () => {
	//     if (this.state.red) this.setState ({url:'https://lcboapi.com/products?q=red&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
	//     else if (this.state.white) this.setState ({url:'https://lcboapi.com/products?q=white&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
	//     else if (this.state.pink) this.setState ({url:'https://lcboapi.com/products?q=pink_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})  
	//     else if (this.state.Bubble) this.setState ({url:'https://lcboapi.com/products?q=bubble&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
	//     console.log(this.state.url)
	//      }


  componentDidMount() {
    fetch('https://lcboapi.com/products?q=wine+red+chile+Sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm')
      .then(res => res.json())
      .then((json) => {
          	this.setState({
	            isLoaded: true,
	            items: json.result
                });
	   })
  }


  render() {

  	const {isLoaded, items } = this.state;

  	console.log(items)

  	const itemsred = items.filter((item,id) => item.secondary_category === "Red Wine")
	const itemswhite = items.filter((item,id) => item.secondary_category === "White Wine")


    if (!isLoaded) return <div>Loading...</div>;

     else if (this.state.red) {
        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.bubbleWineSelection}>Petillant</button>
				

				<ul>
				
				

              {itemsred.map((item, id) => (
                <li key={id}>
                    <p>Vin numero : {id+1}</p>
                    <p> Domaine :  {item.name}</p>
                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
                    <img src={item.image_url} alt="photo du vin"/>
                </li>))}
             
            </ul>	
			</div>

      );
    }

     else if (this.state.white) {
        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.bubbleWineSelection}>Petillant</button>
				

				<ul>
				
				

              {itemswhite.map((item, id) => (
                <li key={id}>
                    <p>Vin numero : {id+1}</p>
                    <p> Domaine :  {item.name}</p>
                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
                    <img src={item.image_url} alt="photo du vin{id}"/>
                </li>))}
             
            </ul>	
			</div>

      );
    }





  }
}

export default Bouton;




// Stella Artois