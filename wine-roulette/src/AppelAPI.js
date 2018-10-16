import React, { Component } from 'react';
import axios from 'axios';
import Redsubcriterion from "./Redsubcriterion"
import Prix from "./Prix"
import Colorbutton from "./Colorbutton"

class Appelapi extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      items: []
	};
};

  componentDidMount() {
  	for (let i = 1; i < 5; i++) {
	    fetch(`https://lcboapi.com/products?page=${i}&per_page=100&where_not=is_dead&q=france+wine&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
	      .then(res => res.json())
	      .then(json => {
	          	this.setState( prevState => {
	          		return {
	          			items: prevState.items.concat(json)
	          			}
	                });
		   })
	      .then(this.setState({isLoaded: true}))
  	}
}


  render() {
  	const {isLoaded, items} = this.state;
  	const itemsResult = items.map(item => (item.result));


	const itemsResultfusion = () => {
		let fusionTable = [];
		for (let i = 0; i < itemsResult.length; i++) {
			fusionTable = [...itemsResult[i], ...fusionTable];
		}	
	console.log(fusionTable)	
  	const pricefilter = fusionTable.filter(item => item.price_in_cents >= this.props.minprice && item.price_in_cents <= this.props.maxprice)
  	const Colorfilter = fusionTable.filter(item => item.secondary_category === this.props.color)
  	const Stylefilter = fusionTable.filter(item => item.style.include(this.props.redSubCriterion))
  	// const pricefilter = fusionTable.filter(item => item.price_in_cents >= this.props.minprice && item.price_in_cents <= this.props.maxprice)
  	// const pricefilter = fusionTable.filter(item => item.price_in_cents >= this.props.minprice && item.price_in_cents <= this.props.maxprice)
		
	}

  	const promise1 = new Promise( (resolve, reject) => {
	    resolve(itemsResultfusion());
		});

 //  	promise1.then(function(value) {
 //  	itemsResultfusion()
 //  	console.log(pricefilter);
	// });


  	// const itemsResultfusin = itemsResultfusion()

  	// console.log(this.props.color)



  	// const itemsResultFiltered = itemsResultfusin
  	// 	// .filter(item => item.secondary_category === this.props.color)
  	// 	.filter(item => item.price_in_cents >= this.props.minprice)

  	// console.log('itemsResultFiltered',itemsResultFiltered)


	// const itemswhite = items.filter(item => item.secondary_category === )
	// const itemspink = items.filter((item,id) => item.secondary_category === "Rosé Wine")
	// const itemschampagne = items.filter((item,id) => item.secondary_category === "Champagne")

	// const itemsredalcohol = itemsred.filter((item,id) => item.alcohol_content === 1300)

	// const itemswhiteSweet = itemswhite.filter((item,id) => item.sugar_content === "S - Sweet")
	// const itemswhiteXdry = itemswhite.filter((item,id) => item.sugar_content === "XD - Extra Dry")
 //   const itemswhiteDry = itemswhite.filter((item,id) => item.sugar_content === "D - Dry")

  	





    if (!isLoaded) return <div>Loading...</div>;

	else return (

		<div>
			<p>PRIX RECHERCHER = {this.props.minprice} / {this.props.maxprice}</p>
			<p>COLOR = {this.props.color}</p>
			<p>whiteSubCriterion = {this.props.whiteSubCriterion}</p>
			<p>redSubCriterion = {this.props.redSubCriterion}</p>	
		</div>
		)
    }
}

export default Appelapi;




















     
   








  //    else if (this.state.white && !this.state.Sweet && !this.state.Xdry && !this.state.Dry  ) {
  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>
		// 		<p></p>
		// 		<button onClick={this.Sweetsugar_contentSelection}>Sec</button>
		// 		<button onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
		// 		<button onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

		// 		<ul>
		// 		{itemswhite.map((item, id) => (
	 //                <li key={id}>
	 //                    <p>Vin numero : {id+1}</p>
	 //                    <p> Domaine :  {item.name}</p>
	 //                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={item.image_url} alt={item.name}/>
	 //                </li>))}
	 //            </ul>	
		// 	</div>

  //     );
  //   }

  //        else if (this.state.white && this.state.Sweet && !this.state.Xdry && !this.state.Dry  ) {

  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>
		// 		<p></p>
		// 		<button className='selected' onClick={this.Sweetsugar_contentSelection}>Sec</button>
		// 		<button onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
		// 		<button onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

		// 		<ul>
		// 		{itemswhiteSweet.map((item, id) => (
	 //                <li key={id}>
	 //                    <p>Vin numero : {id+1}</p>
	 //                    <p> Domaine :  {item.name}</p>
	 //                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={item.image_url} alt={item.name}/>
	 //                </li>))}
	 //            </ul>	
		// 	</div>

  //     );
  //   }

  //        else if (this.state.white && !this.state.Sweet && this.state.Xdry && !this.state.Dry  ) {

  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>
		// 		<p></p>
		// 		<button onClick={this.Sweetsugar_contentSelection}>Sec</button>
		// 		<button className='selected' onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
		// 		<button onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

		// 		<ul>
		// 		{itemswhiteXdry.map((item, id) => (
	 //                <li key={id}>
	 //                    <p>Vin numero : {id+1}</p>
	 //                    <p> Domaine :  {item.name}</p>
	 //                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={item.image_url} alt={item.name}/>
	 //                </li>))}
	 //            </ul>	
		// 	</div>

  //     );
  //   }

  //        else if (this.state.white && !this.state.Sweet && !this.state.Xdry && this.state.Dry  ) {

  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>
		// 		<p></p>
		// 		<button onClick={this.Sweetsugar_contentSelection}>Sec</button>
		// 		<button onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
		// 		<button className='selected' onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

		// 		<ul>
		// 		{itemswhiteDry.map((item, id) => (
	 //                <li key={id}>
	 //                    <p>Vin numero : {id+1}</p>
	 //                    <p> Domaine :  {item.name}</p>
	 //                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={item.image_url} alt={item.name}/>
	 //                </li>))}
	 //            </ul>	
		// 	</div>

  //     );
  //   }











  //        else if (this.state.pink) {
  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button className='selected' onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>
				

		// 		<ul>
				
				

  //             {itemspink.map((item, id) => (
  //               <li key={id}>
  //                   <p>Vin numero : {id+1}</p>
  //                   <p> Domaine :  {item.name}</p>
  //                   <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
  //                   <img src={item.image_url} alt={item.name}/>
  //               </li>))}
             
  //           </ul>	
		// 	</div>

  //     );
  //   }


  //    else if (this.state.champagne && !this.state.Roulette) {
  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button className='selected' onClick={this.champagneWineSelection}>Petillant</button>

		// 		<p></p><p></p><p></p><p></p>

		// 		<button className='selectedRoulette' onClick={this.RouletteChampagne}>Roulette</button>

		// 	</div>)}

  //  else if (this.state.champagne && this.state.Roulette) {

  //  			let alea = Math.floor(Math.random() * (40) + 1)
        

  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button className='selected' onClick={this.champagneWineSelection}>Petillant</button>

		// 		<p></p><p></p><p></p><p></p>

		// 		<button className='selectedRoulette' onClick={this.RouletteChampagne}>Roulette</button>

		// 		<ul>	

	 //                <li>
	 //                    <h4>Hé voilà votre vin :)</h4>
	 //                    <p> Domaine :  {(itemschampagne[ alea ]).name}</p>
	 //                    <p>Prix : {((itemschampagne[ alea ]).price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={(itemschampagne[ alea ]).image_url} alt="PHOTO INDISPONIBLE"/>
	 //                    <p>Taux d'alcool : {(itemschampagne[ alea ]).alcohol_content/100}</p> 
	 //                    <p>Accord met-vin : {(itemschampagne[ alea ]).serving_suggestion}</p> 


	                    


	 //                </li>
	             
	 //            </ul>

		// 	</div>

  //     );
  //   }

  //   else {
  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>

		// 		<ul>	
				
	 //              {items.map((item, id) => (
	 //                <li key={id}>
	 //                    <p>Vin numero : {id+1}</p>
	 //                    <p> Domaine :  {item.name}</p>
	 //                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={item.image_url} alt={item.name}/>
	 //                </li>))}
	             
	 //            </ul>	
		// 	</div>

  //     );
  //   }



  // }





// Stella Artois