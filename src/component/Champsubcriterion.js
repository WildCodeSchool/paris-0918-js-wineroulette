import React, { Component } from "react";

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

class Champsubscriterion extends Component {
  constructor() {
    super();
    this.state = { champSubCriterion: "" };
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
          className={classes.button}
          onClick={() => this.champSubCriterionSelection(["XD - Extra Dry"])}
        >
          {" "}
          Extra-dry{" "}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => this.champSubCriterionSelection(["D - Dry"])}
        >
          {" "}
          Dry{" "}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
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
  