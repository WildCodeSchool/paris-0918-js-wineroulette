import React, { Component } from "react";
import Carte from "./Carte";
import myWines from "../myWineList.json";
import "../style/NbWinePossible.css";

class NbWinePossible extends Component {
  state = {
    data: null,
    wineListFiltered: [''],
    randomImageVigne: 0,
    turning: true // treaks to give a class name 'turning' to the DisplayCard component"
};
  componentDidMount() {
    this.setState({
      data: myWines.filter(item => 
        item.name !== null &&
        item.subStyle !== null &&
        item.package_unit_type === "bottle" &&
        item.varietal !== null &&
        item.origin !== null &&
        item.primary_category === "Wine")
    });
  }


filtering(color, subStyle, subCategory, minprix, maxprix, searchbar, SearchbarRegion) {

    const wineListFiltered = this.state.data.filter(item => {
      // PRIX
      let bool = false;
      bool = (item.price_in_cents >= minprix && item.price_in_cents <= maxprix)
      if (!bool) return false
      //COLOR
      bool = false;
      for (let i = 0; i < color.length; i++) {
        bool = (item.secondary_category === color[i])
        if (bool) break
      } 
      if (!bool) return false
      // VARIERAL
      bool = false;
      if (searchbar.length === 0) bool = true;
      else {
        for (let i = 0; i < searchbar.length; i++) {
          bool = (item.varietal === searchbar[i].value)
          if (bool) break
        } 
      }
      if (!bool) return false
      // Region
      bool = false;
      if (SearchbarRegion.length === 0) bool = true;
      else {
        for (let i = 0; i < SearchbarRegion.length; i++) {
          bool = (item.origin === SearchbarRegion[i].value)
          if (bool) break
        } 
      }
      if (!bool) return false
      // SOUS CATEGORIE
      bool = false;
      if (subStyle[0] === "vin") bool = true;
      else {
        for (let i = 0; i < subStyle.length; i++) {
          bool = (item[`${subCategory}`] === subStyle[i])
          if (bool) break
        } 
      }
      if (!bool) return false 
      ///////////////////////////////////
     return true;
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
                                                this.props.searchbar,
                                                this.props.searchbarRegionPROPS)
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
                                                this.props.searchbar,
                                                this.props.searchbarRegionPROPS)
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

