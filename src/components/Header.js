import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  totalExpenses = () => {
    const { expenses } = this.props;
    console.log(expenses);

    return expenses.reduce((acc, currV) => {
      const currencyValue = currV.value;
      console.log(currencyValue);
      const currencyExchange = currV.exchangeRates[currV.currency].ask;
      console.log(currencyExchange);
      const results = currencyValue * currencyExchange;
      console.log(results);

      return acc + results;
    }, 0).toFixed(2);
  };

  render() {
    const { labelText, user, labelExchange } = this.props;
    return (
      <header>
        <h2>{ labelText }</h2>
        <p data-testid="email-field">
          { `Usuário: ${user}` }
        </p>
        <p data-testid="total-field">
          { `Despesa total: R$ ${this.totalExpenses()}` }
        </p>
        <span data-testid="header-currency-field">{ labelExchange }</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  labelExchange: PropTypes.string.isRequired,
  expenses: PropTypes.instanceOf(Array).isRequired,
};

Header.defaultProps = {
  user: '',
};

export default connect(mapStateToProps)(Header);
