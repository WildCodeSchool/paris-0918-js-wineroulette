/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import suggestions from './StylesofWine-keyWordsForSearchBar'



class Searchbar extends React.Component {

  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
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
      classNamePrefix="select"
      value={selectedOption}
      onChange={this.handleChange}
      />
    );
  }
}

export default Searchbar;