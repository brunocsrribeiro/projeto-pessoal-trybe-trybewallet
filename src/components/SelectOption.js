import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectOption extends Component {
  render() {
    const {
      label,
      name,
      onChange,
      value,
      defaultOption,
      defaultValue,
      dataTestId,
      myOptions } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <select
          required
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        >
          <option value={ defaultValue }>{ defaultOption }</option>
          {
            myOptions.map((option, index) => (
              <option key={ index }>
                { console.log(option) }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

SelectOption.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  myOptions: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  dataTestId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
};

export default SelectOption;
