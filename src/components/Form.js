import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExpenses } from '../actions';

import Input from './Input';
import SelectOption from './SelectOption';
import TextArea from './TextArea';
import fetchAPI from '../services/serviceAPI';

const ALIMENTACAO = 'Alimentação';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      expensesInfo: {
        valor: '',
        moeda: 'CAD',
        metodo: 'Dinheiro',
        tag: ALIMENTACAO,
        descricao: '',
      },
      currencies: [],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.getCurrencyExchange = this.getCurrencyExchange.bind(this);
  }

  componentDidMount() {
    this.getCurrencyExchange();
  }

  // Ref.: Usei alguns trechos de código da Juliane Cardoso,
  // para conseguir alterar os valores nos campos do estado do componente.
  async getCurrencyExchange() {
    const data = await fetchAPI();
    const currencies = Object.keys(data)
      .filter((currency) => currency !== 'USDT');

    this.setState({
      currencies,
    });
  }

  handleOnClick(event) {
    event.preventDefault();
    const { dispatchData } = this.props;
    dispatchData(this.state);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    const { expensesInfo } = this.state;
    this.setState({
      expensesInfo: {
        ...expensesInfo,
        [name]: value,
      },
    });
  }

  render() {
    const methods = ['Dinheiro', 'Cartão de crédito',
      'Cartão de débito'];

    const tags = [ALIMENTACAO, 'Lazer', 'Trabalho',
      'Transporte', 'Saúde'];

    const { expensesInfo, currencies } = this.state;

    const { valor, moeda, metodo,
      tag, descricao } = expensesInfo;

    return (
      <form onSubmit={ this.handleOnClick }>
        <Input
          type="number"
          name="valor"
          label="Valor: "
          value={ valor }
          onChange={ this.handleOnChange }
          dataTestId="value-input"
        />
        <SelectOption
          id="moeda"
          defaultOption="Selecione"
          name="moeda"
          label="Moeda: "
          value={ !moeda ? 'CAD' : moeda }
          onChange={ this.handleOnChange }
          dataTestId="currency-input"
          options={ currencies }
        />
        <SelectOption
          id="metodo"
          defaultOption="Selecione"
          name="metodo"
          label="Método de pagamento: "
          value={ !metodo ? 'Dinheiro' : metodo }
          onChange={ this.handleOnChange }
          dataTestId="method-input"
          options={ methods }
        />
        <SelectOption
          id="tag"
          defaultOption="Selecione"
          name="tag"
          label="Tag: "
          value={ !tag ? ALIMENTACAO : tag }
          onChange={ this.handleOnChange }
          dataTestId="tag-input"
          options={ tags }
        />
        <TextArea
          name="descricao"
          label="Descrição: "
          value={ descricao }
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
});

Form.propTypes = {
  dispatchData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
