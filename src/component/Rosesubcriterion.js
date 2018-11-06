import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#B7143F"
  },
  buttonSelected:{
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
//import Appelapi from "./AppelAPI"

class Rosesubcriterion extends Component {
  constructor() {
    super();
    this.state = { roseSubCriterion: "", buttonSelection: "buttonNotSelected"};
  }

  roseSubCriterionSelection = subStyle => {
    this.setState({ roseSubCriterion: subStyle, buttonSelection: "buttonSelected" });
    this.props.liftsubStyle(subStyle);
  };

  render() {
    const { classes } = this.props;

    // if (this.state.roseSubCriterion === "Easygoing & Fruity"){
    //   console.log("FRUITY!")
    // }
    return (
      <div>
        <Button
          button = {this.state.buttonSelection}
          variant="contained"
          color="secondary"
          className={classes.buttonNotSelected}
          onClick={() => this.roseSubCriterionSelection(["Easygoing & Fruity"])}
        >
          Fruity
        </Button>
        
		<Button
          variant="contained"
          color="secondary"
          className={classes.buttonNotSelected}
          onClick={() =>
            this.roseSubCriterionSelection(["Medium-bodied & Dry"])
          }
        >
          Dry
        </Button>

		<Button
          variant="contained"
          color="secondary"
          className={classes.buttonNotSelected}
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
  