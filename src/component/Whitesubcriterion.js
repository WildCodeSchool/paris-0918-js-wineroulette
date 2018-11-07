import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  buttonSelected: {
    margin: theme.spacing.unit,
    backgroundColor: "#603d8b",
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    '&:hover': {
      backgroundColor: "#603d8b",
    },
  },

  buttonNotSelected: {
    margin: theme.spacing.unit,
    backgroundColor: "#f43365",
    '&:hover': {
      backgroundColor: '#603d8b',
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },

  input: {
    display: "none"
  }
});

class Whitesubcriterion extends Component {
  constructor() {
    super();
    this.state = { whiteSubCriterion: ["vin"] };
  }
 
  whiteSubCriterionSelection = subStyle => {
    // Si je clique et que l'état actuel est sur x-dry/dry.. (buttonSelected) --> je repasse en état initial (buttonNotSelected)
    if (subStyle[0] === this.state.whiteSubCriterion[0]) {
      this.setState({ whiteSubCriterion: ["vin"] });
      this.props.liftsubStyle(["vin"]);
    } else {
      // Si je clique et que l'état actuel est sur rien (buttonNotSelected) --> je passe en état x-dry/dry.. (buttonNotSelected)
      this.setState({ whiteSubCriterion: subStyle });
      this.props.liftsubStyle(subStyle);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.whiteSubCriterion[0] == "XD - Extra Dry"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() => this.whiteSubCriterionSelection(["XD - Extra Dry"])}
        >
          Extra-Dry
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
          Dry
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.whiteSubCriterion[0] == "S - Sweet"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() => this.whiteSubCriterionSelection(["S - Sweet"])}
        >
          Sweet
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.whiteSubCriterion[0] == null
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() => this.whiteSubCriterionSelection([null])}
        >
          Surprise !
        </Button>
      </div>
    );
  }
}

Whitesubcriterion.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Whitesubcriterion);
