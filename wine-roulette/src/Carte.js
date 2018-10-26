import React, { Component } from "react";
import DisplayCarte from "./DisplayCarte";
// import myWines from "./myWineList.json";

class Carte extends Component {
  // state = {
  //   data: null
  // };

  render() {
    //GÉNÈRE UN INDEX AU HASARD
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
    const selectedBottle = this.props.wineListFiltered
    // let isWorking = true;
    let carteVin = {};
      
      carteVin = {
        name: selectedBottle.name,
        pays_region: enleverUndefined(selectedBottle.origin) || "Pas d'origine",
        annee: selectedBottle.released_on
          ? selectedBottle.released_on.slice(0, 4)
          : "Année non renseignée", //ne sélectionne que l'année
        imageVignes: `./photos-vigne/${randomImageVigne}.jpg`,
        imageBouteille:
          selectedBottle.image_thumb_url ? selectedBottle.image_thumb_url : "http://static.hitek.fr/img/actualite/2016/10/07/w_capture-d-e-cran-2016-10-07-a-09-25-20.png",
        descriptionCourte: 
        selectedBottle.serving_suggestion ? `Serving suggestion: ${selectedBottle.serving_suggestion}` : "Pas de suggestion de dégustation bro",
        tags: hashtagMyTags(selectedBottle.style) || "Pas de tags, mamene",
        price: selectedBottle.price_in_cents
          ? `${selectedBottle.price_in_cents /100} $`
          : "Pas de price $$$",
        descriptionDetaillee: sansPointVirgule(selectedBottle.tasting_note) || "Pas de description, va sur Wikipedia calice"
      };
    


    // if (Array.isArray(this.props.wineListFiltered)) return (<p>"Wine is coming..."</p>)

    if (this.props.wineListFiltered[0] === '') return (<p>"Wine is coming..."</p>)
    else return (
      <div>
        {/* {isWorking ? ( */}
          <DisplayCarte carteVin={carteVin} />
        {/* ) : ( */}
          {/* "Pas de wine, tabarnak ! Relance la roulette hostie d'calice !" */}
        {/* )} */}

        </div>
      
    );
  }
}

export default Carte;

    
    // .filter(element => {
    //   return (
    //      element.package_unit_type === "bottle" &&
    //      element.primary_category === "Wine"  
    //     element.secondary_category === this.props.color 
    //     (!element.style || element.style.includes(this.props.subStyle)) &&
    //     element.price_in_cents >= this.props.minprix &&
    //     element.price_in_cents <= this.props.maxprix
    //   );
      
    // })[random]
    // console.log(random)
    // console.log(selectedBottle);
    // console.log();