/* eslint-disable react/prop-types, react/jsx-handler-names */
/* coucocu */

import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import suggestions from './StylesofWine-keyWordsForSearchBar'


class Searchbar extends Component {

  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.liftsearchbar(selectedOption);
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
      key={suggestions.label}
      closeMenuOnSelect={false}
      components={makeAnimated()}
      isMulti={true}
      options={suggestions}
      className="basic-multi-select"
      classNamePrefix="Du pinard Non de Dieu !!!"
      value={selectedOption}
      onChange={this.handleChange}
      />
    );
  }
}

export default Searchbar;