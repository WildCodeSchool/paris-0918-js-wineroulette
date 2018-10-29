import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import './Footer.css';
import Modal from './Modal'


const styles = {
  root: {
    flexGrow: 1,
    marginTop: 22,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#f6c1a0',
    },
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="primary" className="foot">
        <Toolbar>
          <Grid container spacing={24}>

            <Grid item xs={3}>
              <Typography variant="body1" color="inherit">
                <Modal />
              </Typography>
            </Grid>

            {/* <Grid item xs={3}>
              <Typography variant="body1" color="inheritc">
                <a href="#">Link 2</a>
              </Typography>
            </Grid>
          
            <Grid item xs={3}>
              <Typography variant="body1" color="inherit">
                <a href="#">Link 3</a>
              </Typography>
            </Grid>
                      
            <Grid item xs={3}>
                <Typography variant="body1" color="inherit">
                  <a href="#">Link 4</a>
                </Typography>
            </Grid> */}

          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Typography className="rights" variant="caption" color="inherit" >
                  © All right reserved Chaigneau/Castillon/Coutens/Paget/Cnudde/Lucchini/Yu
                </Typography>
            </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);