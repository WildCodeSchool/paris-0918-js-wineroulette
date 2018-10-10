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
      champagne:false,

      isLoaded: false,
      items1: [],

      isLoaded2: false,
      items2: [],

      isLoaded3: false,
      items3: [],

      isLoaded4: false,
      items4: [],

      isLoaded5: false,
      items5: [],

      isLoaded6: false,
      items6: []
	};
};

  

	redWineSelection = () => {
	this.setState ({red: !this.state.red,
		            white:false,
		            pink: false,
		            champagne:false,
		            })
}

	whiteWineSelection =() => {
    this.setState ({red: false,
                    white:!this.state.white,
                    pink: false,
                    champagne:false})
}

 	pinkWineSelection =() => {
    this.setState ({red: false,
                    white:false,
                    pink: !this.state.pink,
                    champagne:false})
}

	champagneWineSelection =() => {
    this.setState ({red: false,
                    white:false,
                    pink: false,
                    champagne:!this.state.champagne})
}


	// urlchange = () => {
	//     if (this.state.red) this.setState ({url:'https://lcboapi.com/products?q=red&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
	//     else if (this.state.white) this.setState ({url:'https://lcboapi.com/products?q=white&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
	//     else if (this.state.pink) this.setState ({url:'https://lcboapi.com/products?q=pink_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})  
	//     else if (this.state.champagne) this.setState ({url:'https://lcboapi.com/products?q=champagne&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'})
	//     console.log(this.state.url)
	//      }

// &order=package_unit_volume_in_milliliters.asc

  componentDidMount() {

    fetch('https://lcboapi.com/products?page=1&per_page=100&where_not=is_dead&q=france+wine&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm')
      .then(res => res.json())
      .then((json) => {
          	this.setState({
	            isLoaded: true,
	            items1: json.result
                });
	   })

      fetch('https://lcboapi.com/products?page=2&per_page=100&where_not=is_dead&q=france+wine&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm')
      .then(res => res.json())
      .then((json) => {
          	this.setState({
	            isLoaded2: true,
	            items2: json.result
                });
	   })

            fetch('https://lcboapi.com/products?page=3&per_page=100&where_not=is_dead&q=france+wine&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm')
      .then(res => res.json())
      .then((json) => {
          	this.setState({
	            isLoaded3: true,
	            items3: json.result
                });
	   })

            fetch('https://lcboapi.com/products?page=4&per_page=100&where_not=is_dead&q=france+wine&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm')
      .then(res => res.json())
      .then((json) => {
          	this.setState({
	            isLoaded4: true,
	            items4: json.result
                });
	   })

            fetch('https://lcboapi.com/products?page=5&per_page=100&where_not=is_dead&q=france+wine&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm')
      .then(res => res.json())
      .then((json) => {
          	this.setState({
	            isLoaded5: true,
	            items5: json.result
                });
	   })

            fetch('https://lcboapi.com/products?page=6&per_page=100&where_not=is_dead&q=france+wine&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm')
      .then(res => res.json())
      .then((json) => {
          	this.setState({
	            isLoaded6: true,
	            items6: json.result
                });
	   })
  }





  render() {

  	const {isLoaded, items1, items2, items3, items4, items5, items6 } = this.state;



  	const items = items1.concat(items2).concat(items3).concat(items4).concat(items5).concat(items6)

  	console.log(items)
  	console.log(this.state.red)
  	console.log(this.state.champagne)

  

  	const itemsred = items.filter((item,id) => item.secondary_category === "Red Wine")
	const itemswhite = items.filter((item,id) => item.secondary_category === "White Wine")
	const itemspink = items.filter((item,id) => item.secondary_category === "Rosé Wine")
	const itemschampagne = items.filter((item,id) => item.secondary_category === "Champagne")




    if (!isLoaded) return <div>Loading...</div>;

     else if (this.state.red) {
        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.champagneWineSelection}>Petillant</button>
				<p></p>
				<button >yooo</button>
				

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
				<button onClick={this.champagneWineSelection}>Petillant</button>
				

				<ul>
				
				

              {itemswhite.map((item, id) => (
                <li key={id}>
                    <p>Vin numero : {id+1}</p>
                    <p> Domaine :  {item.name}</p>
                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
                    <img src={item.image_url} alt={item.name}/>
                </li>))}
             
            </ul>	
			</div>

      );
    }


         else if (this.state.pink) {
        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.champagneWineSelection}>Petillant</button>
				

				<ul>
				
				

              {itemspink.map((item, id) => (
                <li key={id}>
                    <p>Vin numero : {id+1}</p>
                    <p> Domaine :  {item.name}</p>
                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
                    <img src={item.image_url} alt={item.name}/>
                </li>))}
             
            </ul>	
			</div>

      );
    }


     else if (this.state.champagne) {
        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.champagneWineSelection}>Petillant</button>
				

				<ul>
				
				

              {itemschampagne.map((item, id) => (
                <li key={id}>
                    <p>Vin numero : {id+1}</p>
                    <p> Domaine :  {item.name}</p>
                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
                    <img src={item.image_url} alt={item.name}/>
                </li>))}
             
            </ul>	
			</div>

      );
    }


    else {
        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.champagneWineSelection}>Petillant</button>
				

				<p>Selectionne un vin pépé</p>
            
			</div>

      );
    }



  }
}

export default Bouton;




// Stella Artois