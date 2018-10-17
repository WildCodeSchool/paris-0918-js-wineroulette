import React, { Component } from "react";
import DisplayCarte from "./DisplayCarte"
import Vignes from "./imageVignes.jpg";
//import Bouteille from "./chat.jpeg"

class Carte extends Component {

  state={
    data: null
  }

  componentDidMount(){
    fetch('https://lcboapi.com/products?q=wine&where_not=is_dead&per_page=100&access_key=MDoyOTgwZTZhNi1jNzFjLTExZTgtYTI4Yi0yYjk0MTk2ZTlkMGQ6UkkwcjMzSHF5MW9NMEFxUk9OYXE2V3Y5dFlYRnBiell5THJX')
    .then(res => res.json())
    .then(obj => this.setState({data:obj.result}))
  }


  render() {

    if(this.state.data === null)
      return "Wine is coming..."

    
    console.log(this.state.data[0])
    let randomIndex = Math.floor(Math.random() * Math.floor(100))
    //enlève la partie région si non spécifiée
    const enleverUndefined = (paysRegion) => {
      return paysRegion.includes('Region Not Specified')?paysRegion.split(',')[0] : paysRegion
    }

    //split les mots et les renvoie avec des #
    const hashtagMyTags = (style) => {
      return style.split("& ")
      .map(tag => {
          return `#${tag}`})
      .join(" ")
  }

    let carteVin = {
      name: this.state.data[randomIndex].name,
      pays_region: enleverUndefined(this.state.data[randomIndex].origin),
      annee: this.state.data[randomIndex].released_on.slice(0,4), //ne sélectionne pas mois et jour
      imageVignes: Vignes,
      imageBouteille: this.state.data[randomIndex].image_thumb_url,
      descriptionCourte: `Serving suggestion: ${this.state.data[randomIndex].serving_suggestion}`,
      tags: `${hashtagMyTags(this.state.data[randomIndex].style)}`,
      price: `${this.state.data[randomIndex].price_in_cents/100} $`, //transforme prix centimes en prix euro
      descriptionDetaillee: this.state.data[randomIndex].tasting_note
    };
    
    //const imageVin = this.state.data[0]
    //console.log(imageVin)
    
    return (
      <div>
            {/* {this.state.data.splice(0,10).map(element => (
                <img src={element.image_thumb_url} alt={element.name} />
              
              ))
            } */}

            <DisplayCarte carteVin={carteVin} />
      </div>
    );
  }
}

export default Carte;
