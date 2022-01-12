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
      label } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
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
  label: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  onChange: null,
  dataTestId: '',
};

export default Input;
