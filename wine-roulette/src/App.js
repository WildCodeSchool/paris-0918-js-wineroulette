import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Winelist from "./AffichageListeVin/Winelist"
import './App.css';


class App extends Component {

  render() {
    return (

      <div className="App">

        <header className="App-header">

          <img src={logo} className="logo" alt="logo" />
        
        <BrowserRouter>
          <div>

            <NavLink exact to="/red-Wine-Selection"> Rouge </NavLink>
            <NavLink to="/white-Wine-Selection"> Blanc </NavLink>
            <NavLink to="/pink-Wine-Selection"> Rosé </NavLink>
            <NavLink to="/bubble-Wine-Selection"> Petillant </NavLink>

            <Switch>
              <Route exact path="/:type-wine-selection" render={ (props) =><Winelist key={props.match.params.wine} {...props}/>}/>
              

            </Switch>
          </div>
        </BrowserRouter>
       </header>
      </div>
    );
  }
}

export default App;
