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
    backgroundColor: "#B7143F",
    '&:hover': {
      backgroundColor: '#603d8b',
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },

  input: {
    display: "none"
  }
});

class Rosesubcriterion extends Component {
  constructor() {
    super();
    this.state = { roseSubCriterion: ["vin"] };
  }
 
  roseSubCriterionSelection = subStyle => {
    // Si je clique et que l'état actuel est sur x-dry/dry.. (buttonSelected) --> je repasse en état initial (buttonNotSelected)
    if (subStyle[0] === this.state.roseSubCriterion[0]) {
      this.setState({ roseSubCriterion: ["vin"] });
      this.props.liftsubStyle(["vin"]);
    } else {
      // Si je clique et que l'état actuel est sur rien (buttonNotSelected) --> je passe en état x-dry/dry.. (buttonNotSelected)
      this.setState({ roseSubCriterion: subStyle });
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
            this.state.roseSubCriterion[0] == "Easygoing & Fruity"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() => this.roseSubCriterionSelection(["Easygoing & Fruity"])}
        >
          Fruity
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.roseSubCriterion[0] == "Medium-bodied & Dry"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() =>
            this.roseSubCriterionSelection(["Medium-bodied & Dry"])
          }
        >
          Dry
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={
            this.state.roseSubCriterion[0] == "Soft & Off-dry"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() =>
            this.roseSubCriterionSelection(["Soft & Off-dry", null])
          }
        >
          Surprise !
        </Button>
      </div>
    );
  }
}

Rosesubcriterion.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Rosesubcriterion);
