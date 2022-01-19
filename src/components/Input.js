import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      type,
      name,
      value,
      onChange,
      dataTestId,
      labelText } = this.props;

    return (
      <label htmlFor={ name }>
        { labelText }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataTestId: PropTypes.string,
  labelText: PropTypes.string,
};

Input.defaultProps = {
  labelText: '',
  value: '',
  name: '',
  onChange: null,
  dataTestId: '',
};

export default Input;
