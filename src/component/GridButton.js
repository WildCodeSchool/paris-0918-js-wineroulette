import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';



const styles = {
  root: {
    flexGrow: 1,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: {
      main: '#E91E63',
    },
  },
});

function GridButton(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Grid container spacing={24}>

            <Grid item xs={4}>
              <Typography variant="body1" color="inherit">
                
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="body1" color="inheritc">
                <a href="#">Link 2</a>
              </Typography>
            </Grid>
          
            <Grid item xs={4}>
              <Typography variant="body1" color="inherit">
                <a href="#">Link 3</a>
              </Typography>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

GridButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridButton);