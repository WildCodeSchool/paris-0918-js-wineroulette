import React, { Component } from "react";
//import Appelapi from "./AppelAPI"

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
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
    this.state = { whiteSubCriterion: "" };
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
          className={classes.button}
          onClick={() => this.whiteSubCriterionSelection(["XD - Extra Dry"])}
        >
          Extra-Dry
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() =>
            this.whiteSubCriterionSelection(["D - Dry", "M - Medium"])
          }
        >
          Dry
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => this.whiteSubCriterionSelection(["S - Sweet"])}
        >
          Sweet
        </Button>
        
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
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
