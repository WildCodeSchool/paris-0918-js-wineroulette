import React, { Component } from "react";
import DisplayCarte from "./DisplayCarte";
// import myWines from "./myWineList.json";

class Carte extends Component {
  state = {
    data: null
  };

  // componentDidMount() {
  //   this.setState({
  //     data: myWines
  //   });
  // }

  render() {
    
    console.log('wineListFiltered[0]==',this.props.wineListFiltered[0])
    console.log('wineListFiltered===',this.props.wineListFiltered)
    //MESSAGE DE CHARGEMENT DE PAGE
    // if (this.props.wineListFiltered === []) return "Wine is coming...";

    //GÉNÈRE UN INDEX AU HASARD
    let random = Math.floor(Math.random() * Math.floor(this.props.wineListFiltered.length));
    let randomImageVigne = Math.floor(Math.random() * Math.floor(25));

    //ENLEVE LA PARTIE "RÉGION" SI NULL
    const enleverUndefined = paysRegion => {
      if (paysRegion) {
        return paysRegion.includes("Region Not Specified")
          ? paysRegion.split(",")[0]
          : paysRegion;
      } else {
        return null;
      }
    };

    //SPLIT LA PARTIE TAGS ET RENVOIE LES TAGS AVEC DES "#"
    const hashtagMyTags = style => {
      if (style) {
        return style
          .split("& ")
          .map(tag => {
            return `#${tag}`;
          })
          .join(" ");
      } else {
        return null;
      }
    };

    const sansPointVirgule = descriptionDetaillee => {
      if (descriptionDetaillee) {
        return descriptionDetaillee
          .split("; ")
          .map(e => e.charAt(0).toUpperCase() + e.slice(1));
      } else {
        return [];
      }
    };

    // FILTRER POUR N'AVOIR QUE DES PACKAGES = BOUTEILLE & CATEGORY = WINE & SERVING SUGGESTION != NULL
    const selectedBottle = this.props.wineListFiltered.filter(element => {
      return (
         element.package_unit_type === "bottle" &&
         element.primary_category === "Wine"  
        // element.secondary_category === this.props.color 
        // (!element.style || element.style.includes(this.props.subStyle)) &&
        // element.price_in_cents >= this.props.minprix &&
        // element.price_in_cents <= this.props.maxprix
      );
      
    })[random]
    console.log(random)
    // console.log(selectedBottle);
    // console.log();
    let isWorking = false;
    let carteVin = {};
    //FICHE IDENTITÉ DE MA CARTE
    if (selectedBottle) {
      isWorking = true;
      carteVin = {
        name: selectedBottle.name,
        pays_region: enleverUndefined(selectedBottle.origin) || "Pas d'origine",
        annee: selectedBottle.released_on
          ? selectedBottle.released_on.slice(0, 4)
          : "Année non renseignée", //ne sélectionne que l'année
        imageVignes: `./photos-vigne/${randomImageVigne}.jpg`,
        imageBouteille:
          selectedBottle.image_thumb_url || "Pas d'image disponible",
        descriptionCourte:
          `Serving suggestion: ${selectedBottle.serving_suggestion}` ||
          "Pas de description",
        tags: hashtagMyTags(selectedBottle.style) || "Pas de tags, mamene",
        price: selectedBottle.price_in_cents
          ? `${selectedBottle.price_in_cents /100} $`
          : "Pas de price $$$",
        descriptionDetaillee: sansPointVirgule(selectedBottle.tasting_note)
      };
    }


    // if (Array.isArray(this.props.wineListFiltered)) return (<p>"Wine is coming..."</p>)

    if (this.props.wineListFiltered[0] === '') return (<p>"Wine is coming..."</p>)
    else return (
      <div>
        {isWorking ? (
          <DisplayCarte carteVin={carteVin} />
        ) : (
          "Pas de wine, tabarnak ! Relance la roulette hostie d'calice !"
        )}

        </div>
      
    );
  }
}

export default Carte;