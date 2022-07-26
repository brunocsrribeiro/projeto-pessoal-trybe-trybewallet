import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputStyle } from '../styles';

class Input extends Component {
  render() {
    const {
      type,
      name,
      value,
      onChange,
      placeholder,
      labelText } = this.props;

    return (
      <label htmlFor={ name }>
        { labelText }
        <InputStyle
          type={ type }
          name={ name }
          value={ value }
          placeholder={ placeholder }
          onChange={ onChange }
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
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  labelText: '',
  value: '',
  name: '',
  onChange: null,
  placeholder: '',
};

export default Input;
