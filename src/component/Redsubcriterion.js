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

class Redsubcriterion extends Component {
  constructor() {
    super();
    this.state = { redSubCriterion: "vin" };
  }

  redSubCriterionSelection = subStyle => {
    this.setState({ redSubCriterion: subStyle });
    this.props.liftsubStyle(subStyle);
  };

  redSubCriterionSelection = subStyle => {
    // Si je clique et que l'état actuel est sur x-dry/dry.. (buttonSelected) --> je repasse en état initial (buttonNotSelected)
    if (subStyle[0] === this.state.redSubCriterion[0]) {
      this.setState({ redSubCriterion: ["vin"] });
      this.props.liftsubStyle(["vin"]);
    } else {
      // Si je clique et que l'état actuel est sur rien (buttonNotSelected) --> je passe en état x-dry/dry.. (buttonNotSelected)
      this.setState({ redSubCriterion: subStyle });
      this.props.liftsubStyle([subStyle]);
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
            this.state.redSubCriterion[0] == "Full-bodied & Smooth"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
          onClick={() =>
            this.redSubCriterionSelection([
              "Full-bodied & Smooth",
              "Full-bodied & Firm"
            ])
          }
        >
          Full-bodied
        </Button>

		<Button
          variant="contained"
          color="secondary"
           className={
            this.state.redSubCriterion[0] == "Light-bodied & Fruity"
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
		  onClick={() =>
            this.redSubCriterionSelection([
              "Light-bodied & Fruity",
              "Medium-bodied & Fruity"
            ])
          }
        >
          Light-bodied
        </Button>

        <Button
          variant="contained"
          color="secondary"
           className={
            this.state.redSubCriterion[0] == null
              ? classes.buttonSelected
              : classes.buttonNotSelected
          }
		  onClick={() => this.redSubCriterionSelection([null])}
        >
          Surprise !
        </Button>
		
       

        {/* <button onClick={() => this.redSubCriterionSelection('Fruity')}>Fruité</button> */}
        {/* <button onClick={() => this.redSubCriterionSelection('Smooth')}>léger</button> */}
        {/* <button onClick={() => this.redSubCriterionSelection('Rich')}>Riche</button> */}
        {/* <button onClick={() => this.redSubCriterionSelection('Fullbodied')}>Full Full-bodied</button> */}
        {/* <button onClick={() => this.redSubCriterionSelection('Mediumbodied')}>Doux</button> */}
      </div>
    );
  }
}

Redsubcriterion.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Redsubcriterion);
