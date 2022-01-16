import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { label, user, labelDespesa, labelCambio } = this.props;
    return (
      <header>
        <h2>{ label }</h2>
        <p data-testid="email-field">
          { `Usuário: ${user}` }
        </p>
        <p data-testid="total-field">
          { `Despesa total: R$ ${labelDespesa}` }
        </p>
        <p data-testid="header-currency-field">{ labelCambio }</p>
      </header>
    );
  }
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  user: PropTypes.string,
  labelDespesa: PropTypes.number,
  labelCambio: PropTypes.string.isRequired,
};

Header.defaultProps = {
  user: '',
  labelDespesa: 0,
};

export default Header;
