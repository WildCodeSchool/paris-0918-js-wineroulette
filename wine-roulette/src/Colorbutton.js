import React, { Component } from "react";
// import Bouton from "../boutonGenerantURL/Bouton"
import Redsubcriterion from "./Redsubcriterion";
import Whitesubcriterion from "./Whitesubcriterion";
import Rosesubcriterion from "./Rosesubcriterion";
import Champsubcriterion from "./Champsubcriterion";
//import Appelapi from "./AppelAPI"
// import "./bouton.css"

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

class Colorbutton extends Component {
  constructor() {
    super();
    this.state = { color: "Red Wine" };
  }

  ColorSelection = color => {
    this.setState({ color: color });
    this.props.liftColor(color);
    this.props.liftsubStyle("");
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
			onClick={() => this.ColorSelection("Red Wine")}
          >
            Rouge
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("White Wine")}
          >
            Blanc
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("Rosé Wine")}
          >
            Rosé
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("Sparkling Wine")}
          >
            Pétillant
          </Button>
          {/* <button onClick={() => this.ColorSelection("Red Wine")}>Rouge</button>
          <button onClick={() => this.ColorSelection("White Wine")}>
            Blanc
          </button>
          <button onClick={() => this.ColorSelection("Rosé Wine")}>Rosé</button>
          <button onClick={() => this.ColorSelection("Sparkling Wine")}>
            Petillant
          </button> */}
          <p> </p>
          <Redsubcriterion liftsubStyle={this.props.liftsubStyle} />

          {/* <Appelapi color={this.state.color} /> */}
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
			onClick={() => this.ColorSelection("Red Wine")}
          >
            Rouge
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("White Wine")}
          >
            Blanc
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("Rosé Wine")}
          >
            Rosé
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("Sparkling Wine")}
          >
            Pétillant
          </Button>
          {/* <button onClick={() => this.ColorSelection("Red Wine")}>Rouge</button>
          <button onClick={() => this.ColorSelection("White Wine")}>
            Blanc
          </button>
          <button onClick={() => this.ColorSelection("Rosé Wine")}>Rosé</button>
          <button onClick={() => this.ColorSelection("Sparkling Wine")}>
            Petillant
          </button> */}
          <p> </p>
          <Whitesubcriterion liftsubStyle={this.props.liftsubStyle} />
          {/* <Appelapi color={this.state.color} /> */}
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
			onClick={() => this.ColorSelection("Red Wine")}
          >
            Rouge
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("White Wine")}
          >
            Blanc
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("Rosé Wine")}
          >
            Rosé
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("Sparkling Wine")}
          >
            Pétillant
          </Button>
          {/* <button onClick={() => this.ColorSelection("Red Wine")}>Rouge</button>
          <button onClick={() => this.ColorSelection("White Wine")}>
            Blanc
          </button>
          <button onClick={() => this.ColorSelection("Rosé Wine")}>Rosé</button>
          <button onClick={() => this.ColorSelection("Sparkling Wine")}>
            Petillant
          </button> */}
          <p> </p>
          <Rosesubcriterion liftsubStyle={this.props.liftsubStyle} />
          {/* <Appelapi color={this.state.color} /> */}
        </div>
      );
    else if (this.state.color === "Sparkling Wine")
      return (
        <div>
          <p />
          <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("Red Wine")}
          >
            Rouge
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("White Wine")}
          >
            Blanc
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("Rosé Wine")}
          >
            Rosé
          </Button>
		  <Button
            variant="contained"
            color="secondary"
			className={classes.button}
			onClick={() => this.ColorSelection("Sparkling Wine")}
          >
            Pétillant
          </Button>
          {/* <button onClick={() => this.ColorSelection("Red Wine")}>Rouge</button>
          <button onClick={() => this.ColorSelection("White Wine")}>
            Blanc
          </button>
          <button onClick={() => this.ColorSelection("Rosé Wine")}>Rosé</button>
          <button onClick={() => this.ColorSelection("Sparkling Wine")}>
            Petillant
          </button> */}
          <p> </p>
          <Champsubcriterion liftsubStyle={this.props.liftsubStyle} />
          {/* <Appelapi color={this.state.color} /> */}
        </div>
      );
    else
      return (
        <div>
          <p />
          <button onClick={() => this.ColorSelection("red")}>Rouge</button>
          <button onClick={() => this.ColorSelection("white")}>Blanc</button>
          <button onClick={() => this.ColorSelection("pink")}>Rosé</button>
          <button onClick={() => this.ColorSelection("Champagne")}>
            Petillant
          </button>
          <p />
        </div>
      );
  }
}

Colorbutton.propTypes = {
	classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(Colorbutton);
