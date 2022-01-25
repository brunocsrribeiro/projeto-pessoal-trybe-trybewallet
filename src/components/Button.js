import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      id,
      value,
      onClick,
      disabled,
      labelText,
      dataTestId } = this.props;

    return (
      <button
        id={ id }
        value={ value }
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
  id: PropTypes.number,
  value: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  dataTestId: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

Button.defaultProps = {
  id: 0,
  value: null,
  onClick: null,
  dataTestId: '',
  disabled: false,
};

export default Button;
