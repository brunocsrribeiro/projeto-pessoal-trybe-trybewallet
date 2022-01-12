import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { label, user, labelDespesa } = this.props;
    return (
      <header data-testid="email-field">
        <h2>{ label }</h2>
        <span>{ user }</span>
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
