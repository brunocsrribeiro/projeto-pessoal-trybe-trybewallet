import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { label, user, labelDespesa } = this.props;
    return (
      <header>
        <h2>{ label }</h2>
        <span data-testid="email-field">{ user }</span>
        <span data-testid="total-field">{ labelDespesa }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  user: PropTypes.string,
  labelDespesa: PropTypes.number.isRequired,
};

Header.defaultProps = {
  user: '',
};

export default Header;
