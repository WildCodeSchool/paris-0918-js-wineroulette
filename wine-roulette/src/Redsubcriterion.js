import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
	backgroundColor: "#B7143F",
  },
  input: {
    display: "none"
  }
});
//import Appelapi from "./AppelAPI"

class Redsubcriterion extends Component {
  constructor() {
    super();
    this.state = { redSubCriterion: "" };
  }

  redSubCriterionSelection = subStyle => {
    this.setState({ redSubCriterion: subStyle });
    this.props.liftsubStyle(subStyle);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() =>
            this.redSubCriterionSelection([
              "Full-bodied & Smooth",
              "Full-bodied & Firm"
            ])
          }
        >
          Corsé
        </Button>

		<Button
          variant="contained"
          color="secondary"
          className={classes.button}
		  onClick={() =>
            this.redSubCriterionSelection([
              "Light-bodied & Fruity",
              "Medium-bodied & Fruity"
            ])
          }
        >
          Léger
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
		  onClick={() => this.redSubCriterionSelection([null])}
        >
          Mystère !
        </Button>
		
       

        {/* <button onClick={() => this.redSubCriterionSelection('Fruity')}>Fruité</button> */}
        {/* <button onClick={() => this.redSubCriterionSelection('Smooth')}>léger</button> */}
        {/* <button onClick={() => this.redSubCriterionSelection('Rich')}>Riche</button> */}
        {/* <button onClick={() => this.redSubCriterionSelection('Fullbodied')}>Corsé</button> */}
        {/* <button onClick={() => this.redSubCriterionSelection('Mediumbodied')}>Doux</button> */}
      </div>
    );
  }
}

Redsubcriterion.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Redsubcriterion);
