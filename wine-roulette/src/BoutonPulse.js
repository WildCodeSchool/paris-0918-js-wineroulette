import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './BoutonPulse.css';


const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#b71540'
    }
  }});

function BoutonPulse(props) {
  const { classes } = props;
  return (
    <div className="BoutonPulse">
    <MuiThemeProvider theme={theme}>
      <Button 
        variant="fab" 
        mini 
        color="primary" a
        ria-label="Add" 
        className="button">
        <AddIcon />
      </Button>
    </MuiThemeProvider>  
    </div>
  );
}

BoutonPulse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default BoutonPulse;