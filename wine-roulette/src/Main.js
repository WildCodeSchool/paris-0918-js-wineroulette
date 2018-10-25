import React from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import CGV from './CGV';
import App from './App';

class Main extends React.Component {
    render() {
            return (
                <BrowserRouter>
                <div>
                    <NavLink to="/"> Roulette </NavLink>
                    <NavLink to="/mentions"> Mentions Légales </NavLink>
                    <Switch>
                        <Route exact path="/" component={App}></Route>
                        <Route path="/mentions" component={CGV}></Route>
                    </Switch>
                    </div>
                </BrowserRouter>
            ) 
    }
}

export default Main;