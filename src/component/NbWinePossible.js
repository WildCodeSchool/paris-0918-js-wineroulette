import React, { Component } from "react";
import myWines from "../myWineList.json";
import Carte from "./Carte";
import "../style/NbWinePossible.css";

class NbWinePossible extends Component {
  state = {
    data: null,
    wineListFiltered: [''],
    randomImageVigne :0,
    turning: true // treaks to give a class name 'turning' to the DisplayCard component"
};
  componentDidMount() {
    this.setState({
      data: myWines
    });
  }

filtering(color, subStyle, subCategory, minprix, maxprix, searchbar) {

    const wineListFiltered = this.state.data.filter(item => {
        if ((subStyle === '') && (searchbar === ''))
            return (
                item.name !== null &&
                item.subStyle !== null &&
                item.package_unit_type === "bottle" &&
                item.primary_category === "Wine" &&
                item.secondary_category === `${color}` &&
                item.price_in_cents >= minprix &&
                item.price_in_cents <= maxprix
            )
        else if ((subStyle !== "")  && (searchbar === ''))
            return ( 
                item.name !== null &&
                item.subStyle !== null &&
                item.package_unit_type === "bottle" &&
                item.primary_category === "Wine" &&
                item.secondary_category === `${color}` &&
                item.price_in_cents >= minprix &&
                item.price_in_cents <= maxprix &&
                (item[`${subCategory}`] === subStyle[0] || item[`${subCategory}`] === subStyle[1])
            )
          else if ((subStyle === "")  && (searchbar !== ''))
            return ( 
                item.varietal !== null &&
                item.name !== null &&
                item.subStyle !== null &&
                item.package_unit_type === "bottle" &&
                item.primary_category === "Wine" &&
                item.secondary_category === `${color}` &&
                item.price_in_cents >= minprix &&
                item.price_in_cents <= maxprix &&
                (searchbar.map(criterion => criterion.value.includes(item.varietal)).reduce((acc, cur) => {
                    if (!cur) return cur;
                  return acc;
                }, true)))
                

          else if ((subStyle !== "")  && (searchbar !== ''))
            return ( 
                item.varietal !== null &&
                item.name !== null &&
                item.subStyle !== null &&
                item.package_unit_type === "bottle" &&
                item.primary_category === "Wine" &&
                item.secondary_category === `${color}` &&
                item.price_in_cents >= minprix &&
                item.price_in_cents <= maxprix &&
                (item[`${subCategory}`] === subStyle[0] || item.style === subStyle[1]) &&
                (searchbar.map(criterion => criterion.value.includes(item.varietal)).reduce((acc, cur) => {
                    if (!cur) return cur;
                  return acc;
                }, true)))
        else return false
    })
    let random = Math.floor(Math.random() * Math.floor(wineListFiltered.length));
    let randomImageVigne = Math.floor(Math.random() * Math.floor(25));
    this.setState({wineListFiltered: wineListFiltered[random],
                   randomImageVigne: randomImageVigne,
                   turning: !this.state.turning}) // So, value true or false on click of "roulette" button  
    const handleCancelReset = () => {this.props.cancelReset()}
    handleCancelReset()
  };


render() {
    const turning = this.state.turning // So value true or false on click of "roulette" button   
    console.log(this.state.wineListFiltered)
    if (this.props.reset === true) {
      return (
        <div>
        <p></p>
        <button className="roulette" id="roulette" onClick={() => 
                                            this.filtering(
                                                this.props.color, 
                                                this.props.subStyle,
                                                this.props.subCategory, 
                                                this.props.minprix, 
                                                this.props.maxprix, 
                                                this.props.searchbar)
                        }>Roulette</button>
                        </div>
      )

    } else if (this.state.data === null) return "Wine is coming...pépé";

    return (
      <div>
        <p></p>
        <button className="roulette" id="roulette" onClick={() => this.filtering(
                                                this.props.color, 
                                                this.props.subStyle,
                                                this.props.subCategory, 
                                                this.props.minprix, 
                                                this.props.maxprix, 
                                                this.props.searchbar)
                        }>Roulette</button>
        <p></p>
        <Carte turning={turning} // So value true or false on click of "roulette" button
               wineListFiltered={this.state.wineListFiltered}
               randomImageVigne={this.state.randomImageVigne} />
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



// wineAffichageWithSubStyle(color, subStyle = "Medium-bodied & Fruity", subStylecategory = "style") {
//     return `${color} - ${subStyle}=
//     ${(this.state.data.filter(item => {
//       if (item.secondary_category === `${color}` && 
//           item[`${subStylecategory}`] === `${subStyle}`) 
//           return true;
//       else return false;
//     })).length}`
//   };

//   champagneAffichageWithSubStyle(color, subStyle, subStylecategory) {
//   return `${color} - ${subStyle}=
//       ${(this.state.data.filter(item => {
//           if ((item.secondary_category === "Champagne" || 
//               item.secondary_category === "Sparkling Wine") &&
//               item[`${subStylecategory}`] === `${subStyle}`) 
//               return true;
//           else return false;
//     })).length}`

//   }



   // console.log(this.ColorNB("White Wine"));
    // console.log(this.ColorNB("Rosé Wine"));
    // console.log(this.champagneNb());
    // console.log("----------------------------------------------")
    // console.log("----------------------------------------------")
    // console.log(this.wineAffichageWithSubStyle("Red Wine", "Full-bodied & Smooth", "style"));
    // console.log(this.wineAffichageWithSubStyle("Red Wine", "Medium-bodied & Fruity", "style"));
    // console.log(this.wineAffichageWithSubStyle("Red Wine", "Light-bodied & Fruity", "style"));
    // console.log(this.wineAffichageWithSubStyle("Red Wine", "Full-bodied & Firm", "style"));
    // console.log(this.wineAffichageWithSubStyle("Red Wine", null, "style"));
    // console.log(this.wineAffichageWithSubStyle("Red Wine", "Full-bodied  Smooth", "style"));
    // console.log("----------------------------------------------")
    // console.log("----------------------------------------------")
//     this.wineAffichageWithSubStyle("White Wine", "Light & Crisp", "style");
//     this.wineAffichageWithSubStyle("White Wine", "Aromatic & Flavourful", "style");
//     this.wineAffichageWithSubStyle("White Wine", "Off-dry & Fruity", "style");
//     this.wineAffichageWithSubStyle("White Wine", "Full-bodied & Rich", "style");
//     this.wineAffichageWithSubStyle("White Wine", null, "style");
//     console.log("----------------------------------------------")
//     this.wineAffichageWithSubStyle("White Wine", "XD - Extra Dry", "sugar_content");
//     this.wineAffichageWithSubStyle("White Wine", "D - Dry", "sugar_content");
//     this.wineAffichageWithSubStyle("White Wine", "M - Medium", "sugar_content");
//     this.wineAffichageWithSubStyle("White Wine", "S - Sweet", "sugar_content");
//     this.wineAffichageWithSubStyle("White Wine", null, "sugar_content");
//     this.wineAffichageWithSubStyle("White Wine", "-", "sugar_content");
//     console.log("----------------------------------------------")
//     console.log("----------------------------------------------")
//     this.wineAffichageWithSubStyle("Rosé Wine", "XD - Extra Dry", "sugar_content");
//     this.wineAffichageWithSubStyle("Rosé Wine", "D - Dry", "sugar_content");
//     this.wineAffichageWithSubStyle("Rosé Wine", "M - Medium", "sugar_content");
//     this.wineAffichageWithSubStyle("Rosé Wine", "S - Sweet", "sugar_content");
//     this.wineAffichageWithSubStyle("Rosé Wine", null, "sugar_content");
//     this.wineAffichageWithSubStyle("Rosé Wine", "-", "sugar_content");
//     this.wineAffichageWithSubStyle("Rosé Wine", "MS - Medium Sweet", "sugar_content");
//     console.log("----------------------------------------------")
//     this.wineAffichageWithSubStyle("Rosé Wine", "Soft & Off-dry", "style");
//     this.wineAffichageWithSubStyle("Rosé Wine", "Medium-bodied & Dry", "style");
//     this.wineAffichageWithSubStyle("Rosé Wine", "Easygoing & Fruity", "style");
//     this.wineAffichageWithSubStyle("Rosé Wine", null, "style");
//     console.log("----------------------------------------------")
//     console.log("----------------------------------------------")
//     this.champagneAffichageWithSubStyle("Champagne", "XD - Extra Dry", "sugar_content");
//     this.champagneAffichageWithSubStyle("Champagne"         , "D - Dry", "sugar_content");
//     this.champagneAffichageWithSubStyle("Champagne", "M - Medium", "sugar_content");
//     this.champagneAffichageWithSubStyle("Champagne", "S - Sweet", "sugar_content");
//     this.champagneAffichageWithSubStyle("Champagne", null, "sugar_content");
//     this.champagneAffichageWithSubStyle("Champagne", "-", "sugar_content");
//     this.champagneAffichageWithSubStyle("Champagne", "MS - Medium Sweet", "sugar_content");
//     console.log("----------------------------------------------")
//     this.champagneAffichageWithSubStyle("Champagne", "Light & Fruity", "style");
//     this.champagneAffichageWithSubStyle("Champagne", "Medium-bodied & Flavourful", "style");
//     this.champagneAffichageWithSubStyle("Champagne", null, "style");
//     this.champagneAffichageWithSubStyle("Champagne", "Rich & Complex", "style");            
// };

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


    // champagneAffichageWithSubStyle(color, subStyle, subStylecategory) {
    //     return `${color} - ${subStyle}=
    //         ${(this.state.data.filter(item => {
    //             if ((item.secondary_category === "Champagne" || 
    //                 item.secondary_category === "Sparkling Wine") &&
    //                 item[`${subStylecategory}`] === `${subStyle}`) 
    //                 return true;
    //             else return false;
    //       })).length}`
      
    //     }


      // Full-bodied & Firm
// Full-bodied & Smooth


//   FilteringBySubStyle = () => {
//     if (this.props.subStyle === "Full-bodied") {
//             const table = this.state.wineListFiltered.filter(item => {
//                 if (item.style === "Full-bodied & Firm" ||  item.style === "Full-bodied & Smooth") 
//                     return true;
//                 else return false;
//             });
//         this.setState({wineListFiltered: table});
//     } else if 
//         (this.props.subStyle === "Medium-bodied") {
//             const table = this.state.wineListFiltered.filter(item => {
//                 if (item.style === "Light-bodied & Fruity" ||  item.style === "Medium-bodied & Fruity") 
//                     return true;
//                 else return false;
//               });
//         this.setState({wineListFiltered: table});
//     } else {
//         const table = this.state.wineListFiltered.filter(item => item.style === null)
//         this.setState({wineListFiltered: table});
//     }
//     //   const table = this.state.wineListFiltered.filter(item =>item[`${subStylecategory}`] === `${subStyle}`)
//     //   this.setState({wineListFiltered: table});
      
//   };


//   TotalFilter = () => {
//     // console.log(this.props.subStyle)
//     this.FilteringByColor();
//         console.log(this.props.color,this.props.subStyle, this.state.wineListFiltered);
    
//     if (this.props.subStyle !== "") {
//         this.FilteringBySubStyle();
//         console.log(this.props.color,this.props.subStyle, this.state.wineListFiltered);
//     }
// }


//   criterionsRecovery() {
//     this.setState({
//       criterions: { color: this.props.color,
//                     subStyle: this.props.subStyle, 
//                     minprix: this.props.minprix, 
//                     maxprix: this.props.maxprix, 
//                     searchbar: this.props.searchbar}
//     })
//   };


// FilteringByColor = () => {
//     if (this.props.color === "Champagne") {
//         const table = this.state.data.filter(item => {
//             if (item.secondary_category === "Champagne" ||  item.secondary_category === "Sparkling Wine") 
//                 return true;
//             else return false;
//           });
//         this.setState({wineListFiltered: table});
//     } else {
//       const table = this.state.data.filter(item => item.secondary_category === this.props.color);
//       this.setState({wineListFiltered: table});
//     }
//   };
