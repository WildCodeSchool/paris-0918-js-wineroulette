import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
//import BoutonPulse from './BoutonPulse'
import Carte from "./Carte";


class App extends Component {
  render() {

    return (
      <div>
        <Header />
        {/* <DisplayCarte /> */}
        {/* <BoutonPulse /> */}

            <Carte />

      </div>
    );
  }
}

export default App;
