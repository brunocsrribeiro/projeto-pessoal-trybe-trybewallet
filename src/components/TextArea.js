import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const {
      name,
      value,
      onChange,
      dataTestId,
      labelText,
      maxLength } = this.props;

    return (
      <label htmlFor={ name }>
        { labelText }
        <textarea
          name={ name }
          value={ value }
          onChange={ onChange }
          maxLength={ maxLength }
          data-testid={ dataTestId }
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
  dataTestId: PropTypes.string,
}.isRequired;

export default TextArea;
