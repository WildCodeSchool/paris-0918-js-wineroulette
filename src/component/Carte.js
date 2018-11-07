import React, { Component } from "react";
import DisplayCarte from "./DisplayCarte";

class Carte extends Component {
  render() {

    const clearRegionName = RegionName => {
      if (RegionName) return RegionName.includes("Region Not Specified") ? RegionName.split(",")[0] : RegionName;
      else return null;
    };

    const clearTagSection = style => {
      if (style) return style.split("& ").map(tag => `#${tag}`).join(" ");
      else return null;
    };

    const clearSemicolon = txt => {
      if (txt) return txt.split("; ").map(e => e.charAt(0).toUpperCase() + e.slice(1));
      else return [];
    };


    const selectedBottle = this.props.wineListFiltered;
    
    if (selectedBottle !== undefined) {
      let carteVin = {
      name: selectedBottle.name,
      pays_region: clearRegionName(selectedBottle.origin) || "Pas d'origine",
      annee: selectedBottle.released_on ? selectedBottle.released_on.slice(0, 4) : "Année non renseignée",
      imageVignes: `./photos-vigne/${this.props.randomImageVigne}.jpg`,
      imageBouteille: selectedBottle.image_thumb_url ? selectedBottle.image_thumb_url : "https://image.noelshack.com/fichiers/2018/45/3/1541584730-poutine.png",
      descriptionCourte: selectedBottle.serving_suggestion ? `Serving suggestion: ${selectedBottle.serving_suggestion}` : "Pas de suggestion de dégustation bro",
      tags: clearTagSection(selectedBottle.style) || "Pas de tags, mamene",
      price: selectedBottle.price_in_cents ? `${selectedBottle.price_in_cents / 100} $`: "Pas de price $$$",
      descriptionDetaillee: clearSemicolon(selectedBottle.tasting_note) || "Pas de description, va sur Wikipedia calice",
      id: selectedBottle.id };
    return < DisplayCarte 
                        turning={this.props.turning}
                        carteVin={carteVin} />;}

    else return <div> Pas de Pinard BB, pas de bol...</div>
  }
}

export default Carte;
