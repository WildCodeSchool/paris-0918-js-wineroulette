import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './BoutonReset.css'

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#2d3436'
      }
    }});

const BoutonReset = () => {
    return(
        <div className="BoutonReset">
        <MuiThemeProvider theme={theme}>
          <Button 
            variant="fab" 
            mini 
            color="primary" a
            ria-label="Add" 
            className="button"
            >
            <i class="material-icons">
                360
            </i>
          </Button>
        </MuiThemeProvider>  
        </div>
    );


}
export default BoutonReset;