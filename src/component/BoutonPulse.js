import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import '../style/BoutonPulse.css';


const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#b71540'
    }
  }}); 

function BoutonPulse(props) {

  return (
    <div className="BoutonPulse">
    <MuiThemeProvider theme={theme}>
      <Button 
        variant="fab" 
        mini 
        color="primary" 
        aria-label="Add" 
        className="button">
        <AddIcon />
      </Button>
    </MuiThemeProvider>  
    </div>
  );
}



export default BoutonPulse;