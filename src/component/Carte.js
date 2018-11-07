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
      else return null;
    };


    const selectedBottle = this.props.wineListFiltered;
    
    if (selectedBottle !== undefined) {
      let carteVin = {
      name: selectedBottle.name,
      pays_region: clearRegionName(selectedBottle.origin) || "Unspecified origin",
      annee: selectedBottle.released_on ? selectedBottle.released_on.slice(0, 4) : "Unspecified year",
      imageVignes: `./photos-vigne/${this.props.randomImageVigne}.jpg`,
      imageBouteille: selectedBottle.image_thumb_url ? selectedBottle.image_thumb_url : "https://image.noelshack.com/fichiers/2018/45/3/1541584730-poutine.png",
      descriptionCourte: selectedBottle.serving_suggestion ? `${selectedBottle.serving_suggestion}` : "Pas de suggestion de dégustation bro",
      tags: clearTagSection(selectedBottle.style) || "Pas de tags, mamene",
      price: selectedBottle.price_in_cents ? `${selectedBottle.price_in_cents / 100} $`: "Pas de price $$$",
      descriptionDetaillee: clearSemicolon(selectedBottle.tasting_note),
      id: selectedBottle.id };
    return < DisplayCarte 
                        turning={this.props.turning}
                        carteVin={carteVin} />;}

    else return <div> There is no wine that matches your criteria, we can reset</div>
  }
}

export default Carte;
