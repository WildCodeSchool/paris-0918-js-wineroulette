import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  buttonSelected: {
    margin: theme.spacing.unit,
    backgroundColor: "#483D8B",
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
  },

  buttonNotSelected: {
    margin: theme.spacing.unit,
    backgroundColor: "#B7143F"
  },

  input: {
    display: "none"
  }
});

class Champsubscriterion extends Component {
  constructor() {
    super();
    this.state = { champSubCriterion: "vin" };
  }

  champSubCriterionSelection = subStyle => {
    this.setState({ champSubCriterion: subStyle });
    this.props.liftsubStyle(subStyle);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.champSubCriterion == "XD - Extra Dry"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() => this.champSubCriterionSelection(["XD - Extra Dry"])}
          >
          Extra-dry
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.champSubCriterion == "D - Dry"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() => this.champSubCriterionSelection(["D - Dry"])}
        >
          {" "}
          Dry{" "}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.champSubCriterion == ""
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() => this.champSubCriterionSelection([null])}
        >
          Surprise !
        </Button>
        

        {/* <button onClick={() => this.whiteSubCriterionSelection(['XD - Extra Dry'])}>Sec</button>
				<button onClick={() => this.whiteSubCriterionSelection(['D - Dry','M - Medium'])}>Demi-sec</button>
				<button onClick={() => this.whiteSubCriterionSelection(['S - Sweet'])}>Moelleux</button>
				<button onClick={() => this.whiteSubCriterionSelection([null])}>Surprise !</button> */}
      </div>
    );
  }
}

Champsubscriterion.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(Champsubscriterion);
  