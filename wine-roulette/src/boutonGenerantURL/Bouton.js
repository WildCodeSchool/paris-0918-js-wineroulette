import React, { Component } from 'react';
// import Bouton from "../boutonGenerantURL/Bouton"
//import Winelist from "../AffichageListeVin/Winelist"
import "./bouton.css"

// const url = 'https://lcboapi.com/products?q=red+wine+chile+Sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'

class Bouton extends Component {
  constructor() {
    super();
    this.state = {
      red:true,
      white:false,
      pink: false,
      champagne:false,

      alcohol:false,

      Sweet:false,
      Xdry:false,
      Dry:false,


      isLoaded: false,
      items1: [],
      items2: [],
      items3: [],
      items4: [],
      items5: [],
      items6: [],
      items7: []
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
                    champagne:false,
    				alcohol:false})
  //   console.log(this.state.white)
 	// console.log(this.state.Sweet)
 	// console.log(this.state.Xdry)
 	// console.log(this.state.Dry)
 	// console.log('--------------')

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

	alcoholSelection =() => {
    this.setState ({alcohol:!this.state.alcohol})
}


	Sweetsugar_contentSelection =() => {
    this.setState ({Sweet:!this.state.Sweet,
				    Xdry:false,
				    Dry:false})
       //      console.log(this.state.white)
	     	// console.log(this.state.Sweet)
	     	// console.log(this.state.Xdry)
	     	// console.log(this.state.Dry)
	     	// console.log('--------------')
}

	Xdrysugar_contentSelection =() => {
    this.setState ({Sweet:false,
				    Xdry:!this.state.Xdry,
				    Dry:false})
       //   	console.log(this.state.white)
	     	// console.log(this.state.Sweet)
	     	// console.log(this.state.Xdry)
	     	// console.log(this.state.Dry)
	     	// console.log('--------------')
}

	Drysugar_contentSelection =() => {
    this.setState ({Sweet:false,
				    Xdry:false,
				    Dry:!this.state.Dry})
       //   	console.log(this.state.white)
	     	// console.log(this.state.Sweet)
	     	// console.log(this.state.Xdry)
	     	// console.log(this.state.Dry)
	     	// console.log('--------------')
}


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
  	console.log('red       ',this.state.red)
  	console.log('white     ',this.state.white)
  	console.log('pink      ',this.state.pink)
  	console.log('champagne ',this.state.champagne)
  	console.log('alcohol   ',this.state.alcohol)
 	console.log('Sweet     ',this.state.Sweet)
 	console.log('Xdry      ',this.state.Xdry)
 	console.log('Dry       ',this.state.Dry)
 	console.log('--------------')

  	const {isLoaded, items1, items2, items3, items4, items5, items6 } = this.state;

  	const items = items1.concat(items2).concat(items3).concat(items4).concat(items5).concat(items6)


  	const itemsred = items.filter((item,id) => item.secondary_category === "Red Wine")
	const itemswhite = items.filter((item,id) => item.secondary_category === "White Wine")
	const itemspink = items.filter((item,id) => item.secondary_category === "Rosé Wine")
	const itemschampagne = items.filter((item,id) => item.secondary_category === "Champagne")

	const itemsredalcohol = itemsred.filter((item,id) => item.alcohol_content === 1300)

	const itemswhiteSweet = itemswhite.filter((item,id) => item.sugar_content === "S - Sweet")
	const itemswhiteXdry = itemswhite.filter((item,id) => item.sugar_content === "XD - Extra Dry")
	const itemswhiteDry = itemswhite.filter((item,id) => item.sugar_content === "D - Dry")


    if (!isLoaded) return <div>Loading...</div>;

     else if (this.state.red && !this.state.alcohol) {

        return (
			<div>
				<button className='selected' onClick={this.redWineSelection}>Rouge</button>
				<button onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.champagneWineSelection}>Petillant</button>
				<p></p>
				<button onClick={this.alcoholSelection}>alcohol = 13%</button>
				
				<ul>
	              {itemsred.map((item, id) => (
	                <li key={id}>
	                    <p>Vin numero : {id+1}</p>
	                    <p> Domaine :  {item.name}</p>
	                    <p> ALCOOOOOOOL :  {(item.alcohol_content/100)} %</p>
	                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	                    <img src={item.image_url} alt="photo du vin"/>
	                </li>))}
            	</ul>	
			</div>

      );
    }

         else if (this.state.red && this.state.alcohol) {
        return (
			<div>
				<button className='selected' onClick={this.redWineSelection}>Rouge</button>
				<button onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.champagneWineSelection}>Petillant</button>
				<p></p>
				<button onClick={this.alcoholSelection}>alcohol = 13%</button>
				
				<ul>
	              {itemsredalcohol.map((item, id) => (
	                <li key={id}>
	                    <p>Vin numero : {id+1}</p>
	                    <p> Domaine :  {item.name}</p>
	                    <p> ALCOOOOOOOL :  {(item.alcohol_content/100)} %</p>
	                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	                    <img src={item.image_url} alt="photo du vin"/>
	                </li>))}
            	</ul>	
			</div>

      );
    }









     else if (this.state.white && !this.state.Sweet && !this.state.Xdry && !this.state.Dry  ) {
        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.champagneWineSelection}>Petillant</button>
				<p></p>
				<button onClick={this.Sweetsugar_contentSelection}>Sec</button>
				<button onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
				<button onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

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

         else if (this.state.white && this.state.Sweet && !this.state.Xdry && !this.state.Dry  ) {

        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.champagneWineSelection}>Petillant</button>
				<p></p>
				<button className='selected' onClick={this.Sweetsugar_contentSelection}>Sec</button>
				<button onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
				<button onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

				<ul>
				{itemswhiteSweet.map((item, id) => (
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

         else if (this.state.white && !this.state.Sweet && this.state.Xdry && !this.state.Dry  ) {

        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.champagneWineSelection}>Petillant</button>
				<p></p>
				<button onClick={this.Sweetsugar_contentSelection}>Sec</button>
				<button className='selected' onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
				<button onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

				<ul>
				{itemswhiteXdry.map((item, id) => (
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

         else if (this.state.white && !this.state.Sweet && !this.state.Xdry && this.state.Dry  ) {

        return (
			<div>
				<button onClick={this.redWineSelection}>Rouge</button>
				<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
				<button onClick={this.pinkWineSelection}>Rosé</button>
				<button onClick={this.champagneWineSelection}>Petillant</button>
				<p></p>
				<button onClick={this.Sweetsugar_contentSelection}>Sec</button>
				<button onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
				<button className='selected' onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

				<ul>
				{itemswhiteDry.map((item, id) => (
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
				<button className='selected' onClick={this.pinkWineSelection}>Rosé</button>
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
				<button className='selected' onClick={this.champagneWineSelection}>Petillant</button>
				

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
				

				<p>Selectionne une COULEUR de vin pépé</p>
            
			</div>

      );
    }



  }
}

export default Bouton;




// Stella Artois