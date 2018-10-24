import React , { Component } from 'react';

class Champsubscriterion extends Component {

    constructor() {
        super();
        this.state = {champSubCriterion: ""}
    }

    champSubCriterionSelection = subStyle => {
        this.setState({champSubCriterion: subStyle});
        this.props.liftsubStyle(subStyle);
    };

    render() {
        return(
            <div>
				<button onClick={() => this.champSubCriterionSelection('Rich')}> Riche </button>
				<button onClick={() => this.champSubCriterionSelection('Complex')}> Complexe </button>
                <button onClick={() => this.champSubCriterionSelection('Medium-bodied')}> Mi-Corsée </button>
				<button onClick={() => this.champSubCriterionSelection('Flavourful')}> Savoureux </button>
            </div>
        )
    }


}

export default Champsubscriterion;
