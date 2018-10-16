import React, { Component } from "react";
import DisplayCarte from "./DisplayCarte"
import Vignes from "./imageVignes.jpg";
//import Bouteille from "./chat.jpeg"

class Carte extends Component {

  state={
    data: null
  }

  componentDidMount(){
    fetch('https://lcboapi.com/products?q=wine&access_key=MDoyOTgwZTZhNi1jNzFjLTExZTgtYTI4Yi0yYjk0MTk2ZTlkMGQ6UkkwcjMzSHF5MW9NMEFxUk9OYXE2V3Y5dFlYRnBiell5THJX')
    .then(res => res.json())
    .then(obj => this.setState({data:obj.result}))
  }


  render() {

    if(this.state.data === null)
      return "load"

    console.log(this.state.data[0])
    let index = Math.floor(Math.random() * Math.floor(10))
    let carteVin = {
      name: this.state.data[index].name,
      pays_region: this.state.data[index].origin,
      annee: this.state.data[index].released_on,
      imageVignes: Vignes,
      imageBouteille: this.state.data[index].image_thumb_url,
      descriptionCourte: `Serving suggestion: ${this.state.data[index].serving_suggestion}`,
      descriptionDetaillee: this.state.data[index].tasting_note
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
