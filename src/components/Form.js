import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses,
  getCurrencies,
  getExpenses } from '../actions';

import Input from './Input';
import SelectOption from './SelectOption';
import TextArea from './TextArea';
import fetchAPI from '../services/serviceAPI';

const ALIMENTACAO = 'Alimentação';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTACAO,
      exchangeRates: [],
      currencies: [],
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getExchangeRates = this.getExchangeRates.bind(this);
    this.getCurrencyExchange = this.getCurrencyExchange.bind(this);
  }

  componentDidMount() {
    this.getExchangeRates();
    this.getCurrencyExchange();
  }

  // Ref.: Código construido com a ajuda do colega Bruno Fay
  async getCurrencyExchange() {
    const data = await fetchAPI();
    const currencies = data;
    const currencyRedux = Object.keys(currencies)
      .filter((coin) => coin !== 'USDT');

    this.setState({
      currencies: currencyRedux,
    });
  }

  async getExchangeRates() {
    const data = await fetchAPI();
    const exchangeRates = data;

    this.setState({
      exchangeRates,
    });
  }

  handleOnClick(event) {
    event.preventDefault();
    const {
      dispatchData,
      dispatchCurrency,
      dispatchAddExpenses } = this.props;

    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
      currencies } = this.state;

    const infoState = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates };
    dispatchData(infoState);
    dispatchCurrency(currencies);
    dispatchAddExpenses(this.state);

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTACAO,
    }));
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const methods = ['Dinheiro', 'Cartão de crédito',
      'Cartão de débito'];

    const tags = [ALIMENTACAO, 'Lazer', 'Trabalho',
      'Transporte', 'Saúde'];

    const {
      value,
      description,
      currency,
      method,
      tag,
      currencies } = this.state;

    return (
      <form onSubmit={ this.handleOnClick }>
        <Input
          type="number"
          name="value"
          labelText="Valor: "
          value={ value }
          onChange={ this.handleOnChange }
          dataTestId="value-input"
        />
        <SelectOption
          id="currency"
          name="currency"
          labelText="Moeda: "
          value={ !currency ? 'USD' : currency }
          onChange={ this.handleOnChange }
          dataTestId="currency-input"
          options={ currencies }
        />
        <SelectOption
          id="method"
          name="method"
          labelText="Método de pagamento: "
          value={ !method ? 'Dinheiro' : method }
          onChange={ this.handleOnChange }
          dataTestId="method-input"
          options={ methods }
        />
        <SelectOption
          id="tag"
          name="tag"
          labelText="Tag: "
          value={ !tag ? ALIMENTACAO : tag }
          onChange={ this.handleOnChange }
          dataTestId="tag-input"
          options={ tags }
        />
        <TextArea
          name="description"
          labelText="Descrição: "
          value={ description }
          onChange={ this.handleOnChange }
          maxLength="500"
          dataTestId="description-input"
        />
        <Input
          type="submit"
          value="Adicionar Despesas"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchData: (expenses) => dispatch(getExpenses(expenses)),
  dispatchAddExpenses: (payload) => dispatch(addExpenses(payload)),
  dispatchCurrency: (currencies) => dispatch(getCurrencies(currencies)),
});

Form.propTypes = {
  dispatchData: PropTypes.func,
  dispatchCurrency: PropTypes.func,
  dispatchAddExpenses: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Form);
