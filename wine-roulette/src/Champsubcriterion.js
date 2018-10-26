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
				<button onClick={() => this.champSubCriterionSelection(['XD - Extra Dry'])}> Sec </button>
				<button onClick={() => this.champSubCriterionSelection(['D - Dry'])}> Demi-sec </button>
                <button onClick={() => this.champSubCriterionSelection([null])}>Surprise !</button>

                {/* <button onClick={() => this.whiteSubCriterionSelection(['XD - Extra Dry'])}>Sec</button>
				<button onClick={() => this.whiteSubCriterionSelection(['D - Dry','M - Medium'])}>Demi-sec</button>
				<button onClick={() => this.whiteSubCriterionSelection(['S - Sweet'])}>Moelleux</button>
				<button onClick={() => this.whiteSubCriterionSelection([null])}>Surprise !</button> */}
            </div>
        )
    }


}

export default Champsubscriterion;
