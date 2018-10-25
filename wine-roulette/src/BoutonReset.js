import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#2d3436'
      }
    }});

const BoutonReset = () => {
    return(
        <div className="BoutonPulse">
        <MuiThemeProvider theme={theme}>
          <Button 
            variant="fab" 
            mini 
            color="primary" a
            ria-label="Add" 
            className="button"
            >
            <i className="material-icons">
                360
            </i>
          </Button>
        </MuiThemeProvider>  
        </div>
    );


}
export default BoutonReset;