import React, { Component } from "react";
import Redsubcriterion from "./Redsubcriterion";
import Whitesubcriterion from "./Whitesubcriterion";
import Rosesubcriterion from "./Rosesubcriterion";
import Champsubcriterion from "./Champsubcriterion";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
	backgroundColor: "#B7143F",
	'&:active': {
		boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
	  },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  },
  input: {
    display: "none"
  }
});

class Colorbutton extends Component {
  constructor() {
    super();
    this.state = {
      color: "Red Wine",
      subCategory: ""
    };
  }

  ColorSelection = (color, subCategory) => {
    this.setState({ color: color });
    this.setState({ subCategory: subCategory });
    this.props.liftColor(color);
    this.props.liftsubStyle("");
    this.props.liftsubCategory(subCategory);
  };

  render() {
    // ESSAYER DE METTRE DE NE PAS SE REPÉTER
    const { classes } = this.props;
    if (this.state.color === "Red Wine")
      return (
        <div>
          <p />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Red Wine", "style")}
          >
            Rouge
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("White Wine", "sugar_content")}
          >
            Blanc
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Rosé Wine", "style")}
          >
            Rosé
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Champagne", "sugar_content")}
          >
            Pétillant
          </Button>

          <p> </p>
          <Redsubcriterion liftsubStyle={this.props.liftsubStyle} />
        </div>
      );
    else if (this.state.color === "White Wine")
      return (
        <div>
          <p />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Red Wine", "style")}
          >
            Rouge
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("White Wine", "sugar_content")}
          >
            Blanc
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Rosé Wine", "style")}
          >
            Rosé
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Champagne", "sugar_content")}
          >
            Pétillant
          </Button>

          <p> </p>
          <Whitesubcriterion liftsubStyle={this.props.liftsubStyle} />
        </div>
      );
    else if (this.state.color === "Rosé Wine")
      return (
        <div>
          <p />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Red Wine", "style")}
          >
            Rouge
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("White Wine", "sugar_content")}
          >
            Blanc
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Rosé Wine", "style")}
          >
            Rosé
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Champagne", "sugar_content")}
          >
            Pétillant
          </Button>

          <p> </p>
          <Rosesubcriterion liftsubStyle={this.props.liftsubStyle} />
        </div>
      );
    else if (this.state.color === "Champagne")
      return (
        <div>
          <p />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Red Wine", "style")}
          >
            Rouge
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("White Wine", "sugar_content")}
          >
            Blanc
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Rosé Wine", "style")}
          >
            Rosé
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Champagne", "sugar_content")}
          >
            Pétillant
          </Button>

          <p> </p>
          <Champsubcriterion liftsubStyle={this.props.liftsubStyle} />
        </div>
      );
    else
      return (
        <div>
          <p />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Red Wine", "style")}
          >
            Rouge
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("White Wine", "sugar_content")}
          >
            Blanc
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Rosé Wine", "style")}
          >
            Rosé
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.ColorSelection("Champagne", "sugar_content")}
          >
            Pétillant
          </Button>

          <p />
        </div>
      );
  }
}

Colorbutton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Colorbutton);
