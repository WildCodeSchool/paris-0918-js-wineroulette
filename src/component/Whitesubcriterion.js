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

class Whitesubcriterion extends Component {
  constructor() {
    super();
    this.state = { whiteSubCriterion: "vin" };
  }

  whiteSubCriterionSelection = subStyle => {
    this.setState({ whiteSubCriterion: subStyle });
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
            this.state.whiteSubCriterion == "XD - Extra Dry"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() => this.whiteSubCriterionSelection(["XD - Extra Dry"])}
        >
          Sec
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.whiteSubCriterion[0] == "D - Dry"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() =>
            this.whiteSubCriterionSelection(["D - Dry", "M - Medium"])
          }
        >
          Demi-sec
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.whiteSubCriterion == "S - Sweet"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() => this.whiteSubCriterionSelection(["S - Sweet"])}
        >
          Moelleux
        </Button>
        
        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.whiteSubCriterion == ""
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() => this.whiteSubCriterionSelection([null])}
        >
          Mystère !
        </Button>
    
      </div>
    );
  }
}

Whitesubcriterion.propTypes = {
	classes: PropTypes.object.isRequired
  };

  export default withStyles(styles)(Whitesubcriterion);
