import React, { Component } from "react";
import "./DisplayCarte.css";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
//import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
//import red from "@material-ui/core/colors/red";
//import yellow from "@material-ui/core/colors/yellow";
//import deep orange from '@material-ui/core/colors/deep orange';
//import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
//import Paper from '@material-ui/core/Paper';

//CSS de ma carte
const styles = theme => ({
  //   card: {
  //     maxWidth: "500px"
  //   },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  vignes: {
    height: "0",
    paddingTop: "56.25%" // 16:9
    //border: "2px solid blue"
  },
  bouteille: {
    height: "0",
    paddingTop: "56.25%", // 16:9
    paddingBottom: "56.25%"
    //border: "2px solid red"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },

  //CSS de mon bouton Acheter
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#B22222"
  }
  //   input: {
  //     display: "none"
  //   }
});


const DisplayCarte = ({name, pays_region}) => {

}

class DisplayCarte extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h2 className="resultatSelection">Voici votre sélection</h2>

        {/* Gère la taille générale de la carte */}
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            {/* Début de ma carte */}
            <Card className={classes.card}>
              <CardHeader
                title={this.props.carteVin.name}
                subheader={`${this.props.carteVin.pays_region}, ${
                  this.props.carteVin.annee
                }`}
              />

              {/* Gère la taille à l'intérieur de la carte */}
              <Grid container spacing={0}>
                <Grid className="vignes" item xs={9}>
                  <div className="photoVignes">
                    <CardMedia
                      className={classes.vignes}
                      image={this.props.carteVin.imageVignes}
                      title="Vignobles"
                    />
                  </div>
                </Grid>
                <Grid className="bouteille" item xs={3}>
                  <div className="photoBouteille">
                    <CardMedia
                      className={classes.bouteille}
                      image={this.props.carteVin.imageBouteille}
                      title="Sélection de vin"
                    />
                  </div>
                </Grid>
              </Grid>

              <CardContent>
                <Typography component="p">
                  {this.props.carteVin.descriptionCourte}
                </Typography>
                <Typography component="p">
                  {this.props.carteVin.tags}
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                
                {/* PRIX DE LA BOUTEILLE */}
                <p>{this.props.carteVin.price}</p>


                {/* BOUTON PLUS D'INFOS */}
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />


                  {/* BOUTON ACHETER */}
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Acheter
                  </Button>
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    {this.props.carteVin.descriptionDetaillee}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

DisplayCarte.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DisplayCarte);
