import React, { Component } from "react";
import DisplayCarte from "./DisplayCarte";
//import Vignes from "./1.jpg"
import myWines from "./myWineList.json";

const cleanArray = (array) => {
  let i, j, len = array.length, out = [], obj = {};
  for (i = 0; i < len; i++) {
    obj[array[i]] = 0;
  } for (j in obj) {
    out.push(j);
  } return out;
}

class Carte extends Component {
  state = {
    data: null,
    criterions: [],
    wineSelectedWithCriterions: [],
};

  componentDidMount() {
    this.setState({
      data: myWines
    });
  }

  criterionsRecovery() {
    this.setState({
      criterions: [this.props.color,
                   this.props.subStyle, 
                   this.props.minprix, 
                   this.props.maxprix, 
                   ...this.props.searchbar]
    })
  };

  // red => style
              // 0: "Full-bodied & Smooth"
              // 1: "Medium-bodied & Fruity"
              // 2: "Light-bodied & Fruity"
              // 3: "Full-bodied & Firm"
              // 4: "null"
              // 5: "Full-bodied  Smooth"
  // white => sugar_content
              // 0: "XD - Extra Dry"
              // 1: "D - Dry"
              // 2: "M - Medium"
              // 3: "S - Sweet"
              // 4: "MS - Medium Sweet"
              // 5: "null"
              // 6: "-"
    // white => style
              //   0: "Light & Crisp"
              // 1: "Aromatic & Flavourful"
              // 2: "Off-dry & Fruity"
              // 3: "Full-bodied & Rich"
              // 4: "null"
  // Rosé => sugar_content
              // 0: "M - Medium"
              // 1: "XD - Extra Dry"
              // 2: "S - Sweet"
              // 3: "D - Dry"
              // 4: "MS - Medium Sweet"
              // 5: "null"
              // 6: "-"
// Rosé => style
              // 0: "Soft & Off-dry"
              // 1: "Medium-bodied & Dry"
              // 2: "Easygoing & Fruity"
              // 3: "null"
  // Champagne => secondary_category 
              // 11: "Champagne"
              // 4: "Sparkling Wine"

  

  wineAffichage() {


    console.log('tabe====',(this.state.data.filter(item => {
      if (item.secondary_category === "Champagne" || item.secondary_category === "Sparkling Wine") return true;
      else return false;
    })))


    // console.log(cleanArray(this.state.data.filter(item => item.secondary_category === this.props.color[0][0]).map(item => item.style)));

    // console.log('tabe====',cleanArray(this.state.data.filter(item => {
    //   if (item.secondary_category === "Champagne" || item.secondary_category === "Champagne") return true;
    //   else return false;
    // })))
    // .map(item => item.style)));

    console.log(this.props.color)
    console.log(this.props.color[0])
    console.log(this.props.color[1])
    // console.log(cleanArray(this.state.data.map(item => item.secondary_category)));
    if (this.props.subStyle !== "") {
      if (this.props.color === "Red Wine") {
        console.log(this.state.data.filter(item => item.secondary_category === this.props.color).filter(item => item.style !== null).filter(item => item.style.includes(this.props.subStyle)) );
      }
      else if (this.props.color === "White Wine") {

      }
      else if (this.props.color === "Rosé Wine") {

      }
      else if (this.props.color === "Sparkling Wine") {

      }
    }

  }

  render() {
    console.log(this.state.criterions);
    if (this.state.data === null) return "Wine is coming...";

    return (
      <div>
        <p></p>
        <button onClick={() => this.criterionsRecovery()}>criterionsRecovery</button>
        <p></p>
        <button onClick={() => this.wineAffichage()}>wineAffichage</button>
        <p></p>
        {/* {isWorking ? <DisplayCarte carteVin={carteVin} /> : "Pas de wine, tabarnak ! Relance la roulette hostie d'calice !"} */}
      </div>
    );
  }
}

export default Carte;
