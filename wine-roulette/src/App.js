import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
//import BoutonPulse from './BoutonPulse'
import Carte from "./Carte";

import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    let carteVin = {
      name: "Terrasse du Larzac",
      pays: "France",
      region: "Languedoc",
      annee: "2016",
      image: "http://www.cefam.fr/wp-content/uploads/2017/01/vignoble08.jpg",
      descriptionCourte:
        "Vin de 2016, fruité et léger, idéal pour les barbecues",
      descriptionDetaillee: `Lieu d'exception à la géographie dramatique, le Domaine Causse d'Arboras et la profonde faille naturelle qui le 
      dessine s'étendent au pied du Mont Saint-Baudille, la "Sentinelle du Larzac".
      Le domaine est planté à haute densité (7000 pieds/ha) sur un plateau d'éclats calcaires, parmi les plus hauts (320m d'altitude) et les plus au 
      nord du Languedoc. Jouissant de fortes amplitudes thermiques grâce aux influences continentales, il offre des vins 
      blancs purs et des rouges à la fois concentrés et aériens.
      A déguster avec une bonne grosse côte de boeuf!`
    };
    return (
      <div>
        <Header />
        {/* <BoutonPulse /> */}

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={9} sm={6} lg={5}>
            <Carte carteVin={carteVin} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
