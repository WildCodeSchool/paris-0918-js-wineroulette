import React, { Component } from "react";
import myWines from "./myWineList.json";

class NbWinePossible extends Component {
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

  ColorNB(color) {
    console.log(`${color}====`,
    (this.state.data.filter(item => item.secondary_category === `${color}`)).length)
  };
              
  champagneNb() {
    console.log(`Champagne====`,
    (this.state.data.filter(item => {
      if (item.secondary_category === "Champagne" || 
          item.secondary_category === "Sparkling Wine") 
          return true;
      else return false;
    })).length)
  };

  wineAffichageWithSubStyle(color, subStyle = "Medium-bodied & Fruity", subStylecategory = "style") {
    console.log(`${color} - ${subStyle}====`,
    (this.state.data.filter(item => {
      if (item.secondary_category === `${color}` && 
          item[`${subStylecategory}`] === `${subStyle}`) 
          return true;
      else return false;
    })).length)
  };

  champagneAffichageWithSubStyle(color, subStyle, subStylecategory) {
  console.log(`${color} - ${subStyle}====`,
      (this.state.data.filter(item => {
          if ((item.secondary_category === "Champagne" || 
              item.secondary_category === "Sparkling Wine") &&
              item[`${subStylecategory}`] === `${subStyle}`) 
              return true;
          else return false;
    })).length)

  }

  allWinesNb() {
    this.ColorNB("Red Wine");
    this.ColorNB("White Wine");
    this.ColorNB("Rosé Wine");
    this.champagneNb();
    console.log("----------------------------------------------")
    console.log("----------------------------------------------")
    this.wineAffichageWithSubStyle("Red Wine", "Full-bodied & Smooth", "style");
    this.wineAffichageWithSubStyle("Red Wine", "Medium-bodied & Fruity", "style");
    this.wineAffichageWithSubStyle("Red Wine", "Light-bodied & Fruity", "style");
    this.wineAffichageWithSubStyle("Red Wine", "Full-bodied & Firm", "style");
    this.wineAffichageWithSubStyle("Red Wine", null, "style");
    this.wineAffichageWithSubStyle("Red Wine", "Full-bodied  Smooth", "style");
    console.log("----------------------------------------------")
    console.log("----------------------------------------------")
    this.wineAffichageWithSubStyle("White Wine", "Light & Crisp", "style");
    this.wineAffichageWithSubStyle("White Wine", "Aromatic & Flavourful", "style");
    this.wineAffichageWithSubStyle("White Wine", "Off-dry & Fruity", "style");
    this.wineAffichageWithSubStyle("White Wine", "Full-bodied & Rich", "style");
    this.wineAffichageWithSubStyle("White Wine", null, "style");
    console.log("----------------------------------------------")
    this.wineAffichageWithSubStyle("White Wine", "XD - Extra Dry", "sugar_content");
    this.wineAffichageWithSubStyle("White Wine", "D - Dry", "sugar_content");
    this.wineAffichageWithSubStyle("White Wine", "M - Medium", "sugar_content");
    this.wineAffichageWithSubStyle("White Wine", "S - Sweet", "sugar_content");
    this.wineAffichageWithSubStyle("White Wine", null, "sugar_content");
    this.wineAffichageWithSubStyle("White Wine", "-", "sugar_content");
    console.log("----------------------------------------------")
    console.log("----------------------------------------------")
    this.wineAffichageWithSubStyle("Rosé Wine", "XD - Extra Dry", "sugar_content");
    this.wineAffichageWithSubStyle("Rosé Wine", "D - Dry", "sugar_content");
    this.wineAffichageWithSubStyle("Rosé Wine", "M - Medium", "sugar_content");
    this.wineAffichageWithSubStyle("Rosé Wine", "S - Sweet", "sugar_content");
    this.wineAffichageWithSubStyle("Rosé Wine", null, "sugar_content");
    this.wineAffichageWithSubStyle("Rosé Wine", "-", "sugar_content");
    this.wineAffichageWithSubStyle("Rosé Wine", "MS - Medium Sweet", "sugar_content");
    console.log("----------------------------------------------")
    this.wineAffichageWithSubStyle("Rosé Wine", "Soft & Off-dry", "style");
    this.wineAffichageWithSubStyle("Rosé Wine", "Medium-bodied & Dry", "style");
    this.wineAffichageWithSubStyle("Rosé Wine", "Easygoing & Fruity", "style");
    this.wineAffichageWithSubStyle("Rosé Wine", null, "style");
    console.log("----------------------------------------------")
    console.log("----------------------------------------------")
    this.champagneAffichageWithSubStyle("Champagne", "XD - Extra Dry", "sugar_content");
    this.champagneAffichageWithSubStyle("Champagne"         , "D - Dry", "sugar_content");
    this.champagneAffichageWithSubStyle("Champagne", "M - Medium", "sugar_content");
    this.champagneAffichageWithSubStyle("Champagne", "S - Sweet", "sugar_content");
    this.champagneAffichageWithSubStyle("Champagne", null, "sugar_content");
    this.champagneAffichageWithSubStyle("Champagne", "-", "sugar_content");
    this.champagneAffichageWithSubStyle("Champagne", "MS - Medium Sweet", "sugar_content");
    console.log("----------------------------------------------")
    this.champagneAffichageWithSubStyle("Champagne", "Light & Fruity", "style");
    this.champagneAffichageWithSubStyle("Champagne", "Medium-bodied & Flavourful", "style");
    this.champagneAffichageWithSubStyle("Champagne", null, "style");
    this.champagneAffichageWithSubStyle("Champagne", "Rich & Complex", "style");            
  };

//     console.log(cleanArray(this.state.data.map(item => item.secondary_category)))



    // console.log(cleanArray(this.state.data.map(item => item.secondary_category)));
    
    // if (this.props.subStyle !== "") {
    //   if (this.props.color === "Red Wine") {
    //     console.log(this.state.data.filter(item => item.secondary_category === this.props.color).filter(item => item.style !== null).filter(item => item.style.includes(this.props.subStyle)) );
    //   }
    //   else if (this.props.color === "White Wine") {

    //   }
    //   else if (this.props.color === "Rosé Wine") {

    //   }
    //   else if (this.props.color === "Sparkling Wine") {

    //   }
    // }


  render() {
    console.log(this.state.criterions);
    if (this.state.data === null) return "Wine is coming...";

    return (
      <div>
        <p></p>
        <button onClick={() => this.criterionsRecovery()}>criterionsRecovery</button>
        <p></p>
        <button onClick={() => this.allWinesNb()}>wineAffichage</button>
        <p></p>
      </div>
    );
  }
}

export default NbWinePossible;



// subcriterionsofchampagne(color, subStyle, subStylecategory) {
//   console.log(`${color} - ${subStyle}====`,
//       cleanArray((this.state.data.filter(item => {
//           if ((item.secondary_category === "Champagne" || 
//               item.secondary_category === "Sparkling Wine") &&
//               item[`${subStylecategory}`] === `${subStyle}`) 
//               return true;
//           else return false;
//     })).map(item => item.sugar_content)))
//   }
