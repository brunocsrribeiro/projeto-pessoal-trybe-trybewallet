import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ButtonStyle, theme } from '../styles';

class Button extends Component {
  render() {
    const {
      id,
      value,
      onClick,
      disabled,
      labelText } = this.props;

    return (
      <ThemeProvider theme={ theme }>
        <ButtonStyle
          id={ id }
          value={ value }
          type="button"
          onClick={ onClick }
          disabled={ disabled }
        >
          { labelText }
        </ButtonStyle>
      </ThemeProvider>
    );
  }
}

Button.propTypes = {
  id: PropTypes.number,
  value: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
};

Button.defaultProps = {
  id: 0,
  value: null,
  onClick: null,
  disabled: false,
};

export default Button;
