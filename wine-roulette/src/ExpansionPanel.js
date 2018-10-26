import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Searchbar from './Searchbar';
import './ExpansionPanel.css'
import BoutonPulse from './BoutonPulse';

const styles = theme => ({
    root: {
        width: '70%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    });

    function SimpleExpansionPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
        <ExpansionPanel className="test">
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
                <BoutonPulse />
            </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <Searchbar />
                {/* <Searchbar liftsearchbar={this.liftsearchbar}/> */}
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
    );
    }

    SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);