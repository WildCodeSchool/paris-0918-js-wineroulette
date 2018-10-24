/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import suggestions from './StylesofWine-keyWordsForSearchBar'


export default function Searchbar() {
  return (
    <Select
      key={suggestions.label}
      closeMenuOnSelect={false}
      components={makeAnimated()}
      isMulti={true}
      options={suggestions}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
}
