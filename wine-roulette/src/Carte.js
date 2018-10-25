import React, { Component } from "react";
import DisplayCarte from "./DisplayCarte";
//import Vignes from "./1.jpg"
import myWines from "./myWineList.json";

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
      data: myWines,
      filter: []
    });
  }

  render() {
    //MESSAGE DE CHARGEMENT DE PAGE
    if (this.state.data === null) return "Wine is coming...";

    //GÉNÈRE UN INDEX AU HASARD
    let randomIndex = Math.floor(
      Math.random() * Math.floor(this.state.filter.length)
    );
    let randomImageVigne = Math.floor(Math.random() * Math.floor(25));

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

    const sansPointVirgule = descriptionDetaillee => {
        return descriptionDetaillee
          .split("; ")
          .map(e => e.charAt(0).toUpperCase() + e.slice(1));
      }

    // FILTRER POUR N'AVOIR QUE DES PACKAGES = BOUTEILLE & CATEGORY = WINE & SERVING SUGGESTION != NULL
    const selectedBottle = this.state.data.filter(element => {
      return (
        element.name !== null &&
        element.released_on !== null &&
        element.origin !== null &&
        element.style !== null &&
        element.tasting_note !== null &&
        element.package_unit_type !== null &&
        element.serving_suggestion !== null &&
        element.package_unit_type === "bottle" &&
        element.primary_category === "Wine" &&
        element.secondary_category === this.props.color &&
        (!element.style || element.style.includes(this.props.subStyle)) &&
        element.price_in_cents >= this.props.minprix &&
        element.price_in_cents <= this.props.maxprix
      );
    })[randomIndex];
    // console.log();
    let isWorking = false;
    let carteVin = {};
    //FICHE IDENTITÉ DE MA CARTE
    if (selectedBottle) {
      isWorking = true;
      carteVin = {
        name: selectedBottle.name,
        pays_region: enleverUndefined(selectedBottle.origin),
        annee: selectedBottle.released_on.slice(0, 4), //ne sélectionne que l'année
        imageVignes: `./photos-vigne/${randomImageVigne}.jpg`,
        imageBouteille: selectedBottle.image_thumb_url,
        descriptionCourte: `Serving suggestion: ${
          selectedBottle.serving_suggestion
        }`,
        tags: `${hashtagMyTags(selectedBottle.style)}`,
        price: `${selectedBottle.price_in_cents / 100} $`, //transforme prix centimes en prix euro
        descriptionDetaillee: sansPointVirgule(selectedBottle.tasting_note)
      };
    }

    //CONSOLE LOG DE MON FILTER MAP
    // const wineName = this.state.data.splice(0, 50)
    // .filter(element => element.secondary_category.includes("Red Wine"))
    // .map((element) => (element.name))

    // console.log(wineName)

    return (
      <div>
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

        {isWorking ? <DisplayCarte carteVin={carteVin} /> : "Pas de wine, tabarnak ! Relance la roulette hostie d'calice !"}
      </div>
    );
  }
}

export default Carte;
