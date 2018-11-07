/* eslint-disable react/prop-types, react/jsx-handler-names */
/* coucocu */

import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";
import suggestionsRegion from "./RegionList";

class SearchbarRegion extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.liftsearchbarRegion(selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        key={suggestionsRegion.label}
        closeMenuOnSelect={false}
        placeholder="Origin"
        components={makeAnimated()}
        isMulti={true}
        options={suggestionsRegion}
        className="basic-multi-select"
        classNamePrefix="Du pinard Non de Dieu !!!"
        value={selectedOption}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchbarRegion;