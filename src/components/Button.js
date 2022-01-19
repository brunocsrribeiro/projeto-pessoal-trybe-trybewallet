import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      onClick,
      disabled,
      labelText,
      dataTestId } = this.props;

    return (
      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
        data-testid={ dataTestId }
      >
        { labelText }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  dataTestId: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: null,
  dataTestId: '',
  disabled: false,
};

export default Button;
