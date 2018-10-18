import React, { Component } from "react";
import DisplayCarte from "./DisplayCarte";
import Vignes from "./imageVignes.jpg";
import myWines from "./myWineList.json";
//import Bouteille from "./chat.jpeg"

class Carte extends Component {
  state = {
    data: null
  };

  //UTILISATION DU FETCH
  // componentDidMount(){
  //   fetch('https://lcboapi.com/products?q=wine&where_not=is_dead&per_page=100&access_key=MDoyOTgwZTZhNi1jNzFjLTExZTgtYTI4Yi0yYjk0MTk2ZTlkMGQ6UkkwcjMzSHF5MW9NMEFxUk9OYXE2V3Y5dFlYRnBiell5THJX')
  //   .then(res => res.json())
  //   .then(obj => this.setState({data:obj.result}))
  //   componentDidMount()}

  componentDidMount() {
    this.setState({
      data: myWines
    });
  }

  render() {
    //MESSAGE DE CHARGEMENT DE PAGE
    if (this.state.data === null) return "Wine is coming...";

    //GÉNÈRE UN INDEX AU HASARD
    let randomIndex = Math.floor(Math.random() * Math.floor(100));

    //ENLEVE LA PARTIE "RÉGION" SI NULL
    const enleverUndefined = paysRegion => {
      return paysRegion.includes("Region Not Specified")
        ? paysRegion.split(",")[0]
        : paysRegion;
    };

    //SPLIT LA PARTIE TAGS ET RENVOIE LES TAGS AVEC DES "#"
    const hashtagMyTags = style => {
      return style
        .split("& ")
        .map(tag => {
          return `#${tag}`;
        })
        .join(" ");
    };

    
    // const tabPackage = this.state.data[0].package.split(" ")[2]
    // //const tabPackage = this.state.data[0].package.charAt(0)
    // console.log(tabPackage)
    // const packageBottle = this.state.data.filter(element => {
    //   console.log(element.package)
    //   return element.package !== null && element.package.split(" ")[2] === "bottle"})[randomIndex]
    
    // FILTER POUR N'AVOIR QUE DES PACKAGES BOUTEILLE
    const packageBottle = this.state.data.filter(element => {
      return element.package !== null && element.package.split(" ")[2] === "bottle"
    })[randomIndex]
   
    //FICHE IDENTITÉ DE MA CARTE
    let carteVin = {
      name: packageBottle.name,
      pays_region: enleverUndefined(packageBottle.origin),
      annee: packageBottle.released_on.slice(0, 4), //ne sélectionne pas mois et jour
      imageVignes: Vignes,
      imageBouteille: packageBottle.image_thumb_url,
      descriptionCourte: `Serving suggestion: ${
        packageBottle.serving_suggestion
      }`,
      tags: `${hashtagMyTags(packageBottle.style)}`,
      price: `${packageBottle.price_in_cents / 100} $`, //transforme prix centimes en prix euro
      descriptionDetaillee: packageBottle.tasting_note
    };

    //CONSOLE LOG DE MON FILTER MAP
    // const wineName = this.state.data.splice(0, 50)
    // .filter(element => element.secondary_category.includes("Red Wine"))
    // .map((element) => (element.name))

    // console.log(wineName)

    return (
      <div>
        {/* {this.state.data.map(element => element.package)} */}


        {/* AFFICHER TOUS LES STYLES POUR LES VINS BLANC UNIQUEMENT
        {this.state.data
          .filter(element => element.secondary_category === "White Wine")
          .map(element => element.style)
          .sort()} */}

        {/* AFFICHER TOUTES LES PHOTOS DE 0 A 10 */}
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
