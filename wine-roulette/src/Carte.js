import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
//import red from '@material-ui/core/colors/red';
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  //CSS de ma carte
//   card: {
//     maxWidth: "500px"
//   },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
    margin: theme.spacing.unit
  }
  //   input: {
  //     display: "none"
  //   }
});

class Carte extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    
    const { classes } = this.props;

    return (
      <div>
        Résultat de la roulette : {this.props.carteVin.name}
          <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.carteVin.name}
            subheader={`${this.props.carteVin.pays}, ${
              this.props.carteVin.region
            }, ${this.props.carteVin.annee}`}

            //subheader={this.props.region}
          />
          <CardMedia
            className={classes.media}
            image={this.props.carteVin.image}
            // title="Vignobles"
          />
          <CardContent>
            <Typography component="p">
              {this.props.carteVin.descriptionCourte}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Acheter
            </Button>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
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

      </div>
    );
  }
}

Carte.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Carte);
