import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from '../styles';

class SelectOption extends Component {
  render() {
    const {
      id,
      labelText,
      name,
      onChange,
      value,
      dataTestId,
      options } = this.props;

    return (
      <label htmlFor={ name }>
        { labelText }
        <Select
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        >
          {
            options && options.map((option, index) => (
              <option
                value={ option }
                data-testid={ option }
                key={ index }
              >
                { option }
              </option>
            ))
          }
        </Select>
      </label>
    );
  }
}

SelectOption.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ),
  dataTestId: PropTypes.string.isRequired,
};

SelectOption.defaultProps = {
  options: [],
  onChange: null,
};

export default SelectOption;
