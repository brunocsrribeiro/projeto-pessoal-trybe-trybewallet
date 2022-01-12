import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      type,
      onClick,
      label,
      disabledButton } = this.props;

    return (
      <button
        type={ type ? 'button' : 'submit' }
        onClick={ onClick }
        disabled={ disabledButton }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabledButton: PropTypes.bool.isRequired,
};

export default Button;
