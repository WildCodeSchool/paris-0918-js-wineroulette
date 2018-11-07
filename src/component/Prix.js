import React, { Component } from 'react';
import '../style/Prix.css'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Grid from "@material-ui/core/Grid";
import Slider from "rc-slider";
import Typography from "@material-ui/core/Typography";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const wrapperStyle = { width: 280, marginTop: 20 };


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
    this.state = { minprix: 800, maxprix: 28000, priceMinMax: [800, 28000] };
  }

  handlePriceChange = priceMinMax => {
    this.setState({
      priceMinMax
    });
    this.props.liftPrice(priceMinMax[0], priceMinMax[1]);
  };

  render() {

    return (
      <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            alignContent="center"
          >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div style={wrapperStyle}>
            <Typography component="p" align="center" variant="headline">
              Price
            </Typography>
            <Range
              min={0}
              max={30000}
              step={100}
              value={this.state.priceMinMax}
              onChange={this.handlePriceChange}
              allowCross={false}
              pushable={500}
              tipFormatter={value => `${Math.floor(value / 100)}$`}
              {...this.props}
            />
          </div>
        </Grid>
      </Grid>
      
    );
  }
}

Prix.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Prix);
