import React, { Component } from 'react';
// import Whitesubcriterion from "./Whitesubcriterion"
// import Appelapi from "./AppelAPI"
import '../style/Prix.css'

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

class Prix extends Component {
  constructor() {
    super();
    this.state = { minprix: 2000, maxprix: 50000 };
  }

  PriceSelection = (minprix, maxprix) => {
    this.setState({ minprix: minprix, maxprix: maxprix });
    this.props.liftPrice(minprix, maxprix);
    // (e).preventDefault()
  };

  render() {
    const { classes } = this.props;

    // balise html le fait : https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/range
    // localstorage
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => this.PriceSelection(0, 999)}
        >
          Moins de 10$
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => this.PriceSelection(1000, 1999)}
        >
          Entre 10 et 20$
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => this.PriceSelection(2000, 50000)}
        >
          Plus de 20$
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => this.PriceSelection(0, 50000)}
        >
          Tous les prix
        </Button>
      </div>
    );
  }
}

Prix.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Prix);
