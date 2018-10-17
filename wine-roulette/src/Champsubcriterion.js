import React , { Component } from 'react';

class Champsubscriterion extends Component {

    constructor() {
        super();
        this.state = {ChampSub: ""}
    }

    ChampSubSelect = (Style) => {
        this.setState({
            ChampSub: Style
        })
    }

    render() {
        return(
            <div>
				<button onClick={() => this.ChampSubSelect('Rich')}> Riche </button>
				<button onClick={() => this.ChampSubSelect('Complex')}> Complexe </button>
                <button onClick={() => this.ChampSubSelect('Medium-bodied')}> Mi-Corsée </button>
				<button onClick={() => this.ChampSubSelect('Flavourful')}> Savoureux </button>
            </div>
        )
    }


}

export default Champsubscriterion;
