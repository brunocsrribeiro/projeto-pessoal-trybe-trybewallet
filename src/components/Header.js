import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Fields, HeaderStyle, theme } from '../styles';
import { ThemeProvider } from 'styled-components';

class Header extends Component {
  totalExpenses = () => {
    const { expenses } = this.props;

    return expenses.reduce((acc, currV) => {
      const currencyValue = currV.value;
      const currencyExchange = currV.exchangeRates[currV.currency].ask;
      const results = currencyValue * currencyExchange;

      return acc + results;
    }, 0).toFixed(2);
  };

  render() {
    const { labelText, user, labelExchange } = this.props;
    return (
      <ThemeProvider theme={ theme }>
        <Container>
          <HeaderStyle>
            <h1>{ labelText }</h1>
          </HeaderStyle>
          <Fields>
            <div>
              <p id="email-field">
                { `Usuário: ${user}` }
              </p>
              <p id="total-field">
                { `Despesa total: R$ ${this.totalExpenses()}` }
              </p>
            </div>
            <span id="header-currency-field">{ labelExchange }</span>
          </Fields>
        </Container>
      </ThemeProvider>
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
