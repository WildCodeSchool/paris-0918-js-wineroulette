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
  	// APPEL DE 30 PAGE PAGE DE 100 VINS
  	for (let i = 1; i < 31; i++) {
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
  	// LE TABLEAU ITEM COMPRENANT TOUTES LES DONNÉES, JE CREE UN NOUVEAU TABLEAU AVEC LES SOUS OBJETS RESULT (QUI SONT DES TABLEAU)
  	const itemsResult = items.map(item => (item.result));


	// LE TABLEAU ITEMSRESULT ETANT UN TABELAU DE TABLEAU, JE FUSIONNE LES TABLEAUX DANS UN SEUL
	const itemsResultfusion = () => {
		let fusionTable = [];
		for (let i = 0; i < itemsResult.length; i++) {
			fusionTable = [...itemsResult[i], ...fusionTable];
		}	
	return fusionTable
	}

	// LA FUSION EST DECLANCHEE AVEC UNE PROMESSE, AFIN DE FUSIONNER SSI TOUT LE TABLEAU ITEMSRESULT EST BELLE ET BIEN COMPLET
  	const promise1 = new Promise( (resolve, reject) => {
	    resolve(console.log(itemsResultfusion()));
		});


    if (!isLoaded) return <div>Loading...</div>;

	else return <div> ok </div>
		
    }
}

export default Appelapi;


// ENSUITE JE PENSE QU'ON PEUX ESSAYER DE FAIRE UN NOUVEAU COMPOSANT 
// VA RECUPÉRER LES PROPS DES COMPOSANTS BOUTONS ET FILTRE LE TABLEAU FUSIONTABLE LUI MEME TRANSMIS EN PROPS

  	// const pricefilter = fusionTable.filter(item => item.price_in_cents >= this.props.minprice && item.price_in_cents <= this.props.maxprice)
  	// const Colorfilter = fusionTable.filter(item => item.secondary_category === this.props.color)
  	// const Stylefilter = fusionTable.filter(item => item.style.include(this.props.redSubCriterion))



















     
   








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