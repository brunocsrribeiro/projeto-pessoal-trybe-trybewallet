import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk, getExchangeRatesThunk } from '../actions';

import Input from './Input';
import SelectOption from './SelectOption';
import TextArea from './TextArea';
import Button from './Button';
import { ContainerForms, FormStyle } from '../styles';

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
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleOnClick() {
    const { getExpensesThunk } = this.props;
    getExpensesThunk(this.state);

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTACAO,
      exchangeRates: [],
    }));
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { getCurrency } = this.props;
    const methods = ['Dinheiro', 'Cartão de crédito',
      'Cartão de débito'];

    const tags = [ALIMENTACAO, 'Lazer', 'Trabalho',
      'Transporte', 'Saúde'];

    const {
      value,
      description,
      currency,
      method,
      tag } = this.state;

    return (
      <ContainerForms>
        <FormStyle>
          <Input
            type="number"
            name="value"
            placeholder={ !currency ? 'USD' : currency }
            labelText="Valor"
            value={ value }
            onChange={ this.handleOnChange }
            id="value-input"
          />
          <SelectOption
            id="currency"
            name="currency"
            labelText="Moeda"
            value={ !currency ? 'USD' : currency }
            onChange={ this.handleOnChange }
            class="currency-input"
            options={ getCurrency }
          />
          <SelectOption
            id="method"
            name="method"
            labelText="Método de pagamento"
            value={ !method ? 'Dinheiro' : method }
            onChange={ this.handleOnChange }
            class="method-input"
            options={ methods }
          />
          <SelectOption
            id="tag"
            name="tag"
            labelText="Tag"
            value={ !tag ? ALIMENTACAO : tag }
            onChange={ this.handleOnChange }
            class="tag-input"
            options={ tags }
          />
          <TextArea
            name="description"
            labelText="Descrição"
            value={ description }
            onChange={ this.handleOnChange }
            maxLength="500"
            id="description-input"
          />
          <Button
            id="wallet-btn"
            type="button"
            labelText="Adicionar Despesas"
            onClick={ this.handleOnClick }
          />
        </FormStyle>
      </ContainerForms>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrency: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  getExpensesThunk: (expense) => dispatch(getExchangeRatesThunk(expense)),
});

Form.propTypes = {
  getCurrencies: PropTypes.func,
  getExpensesThunk: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
