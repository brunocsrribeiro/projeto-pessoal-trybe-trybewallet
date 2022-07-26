import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextareaStyle } from '../styles';

class TextArea extends Component {
  render() {
    const {
      name,
      value,
      onChange,
      labelText,
      maxLength } = this.props;

    return (
      <label htmlFor={ name }>
        { labelText }
        <TextareaStyle
          name={ name }
          value={ value }
          onChange={ onChange }
          maxLength={ maxLength }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.string,
  labelText: PropTypes.string,
}.isRequired;

export default TextArea;
