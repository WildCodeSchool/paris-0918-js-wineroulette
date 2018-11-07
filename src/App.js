import React, { Component } from "react";
import NbWinePossible from "./component/NbWinePossible";
import Prix from "./component/Prix";
import Colorbutton from "./component/Colorbutton";
import "./style/App.css";
import Footer from "./component/Footer/Footer";
import Searchbar from "./component/Searchbar";
import SearchbarRegion from "./component/SearchbarRegion";
import BoutonReset from "./component/BoutonReset";

class App extends Component {
  state = {
    color: ["Red Wine"],
    subStyle: "",
    subCategory: "style",
    minprix: 0,
    maxprix: 30000,
    searchbar: "",
    searchbarRegion: "",
    reset: true
  };

  liftColor = color => {
    this.setState({ color: color });
  };
  liftsubStyle = subStyle => {
    this.setState({ subStyle: subStyle });
  };
  liftPrice = (minprix, maxprix) => {
    this.setState({ minprix: minprix, maxprix: maxprix });
  };
  liftsearchbar = searchbar => {
    this.setState({ searchbar: searchbar });
  };

  liftsearchbarRegion = searchbarRegion => {
    this.setState({ searchbarRegion: searchbarRegion });
  };

  liftsubCategory = subCategory => {
    this.setState({ subCategory: subCategory });
  };
//  liftReset = () => {
//    window.location.reload();
//    window.location.href = "./";
//  };
  liftCancelReset = () => {
    this.setState({
      reset: false
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <img
            src="http://image.noelshack.com/fichiers/2018/43/5/1540559518-wine-final.png"
            alt="logprincipal"
            className="logoWine"
          />
          {/* <BoutonReset liftReset={this.liftReset} /> */}
          <p />
          <div className="rangeSlider">
          <Prix liftPrice={this.liftPrice} />
          <span>between {(this.state.minprix)/100} $ and {(this.state.maxprix)/100} $</span>
          </div>
          <p />
          <Colorbutton
            liftColor={this.liftColor}
            liftsubStyle={this.liftsubStyle}
            liftsubCategory={this.liftsubCategory}
            className="colorButtons"
          />
          <p />
          <div className="Searchbar">
            <Searchbar liftsearchbar={this.liftsearchbar} />
            <p />
            <SearchbarRegion liftsearchbarRegion={this.liftsearchbarRegion} />
          </div>
          <NbWinePossible
            color={this.state.color}
            subStyle={this.state.subStyle}
            subCategory={this.state.subCategory}
            minprix={this.state.minprix}
            maxprix={this.state.maxprix}
            searchbar={this.state.searchbar}
            searchbarRegionPROPS={this.state.searchbarRegion}
            reset={this.state.reset}
            cancelReset={this.liftCancelReset}
          />
        </div>

        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
