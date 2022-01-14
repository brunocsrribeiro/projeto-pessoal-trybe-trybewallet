import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExpenses } from '../actions';

import Input from './Input';
import SelectOption from './SelectOption';
import TextArea from './TextArea';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      valor: '',
      moeda: '',
      metodoDePagamento: '',
      tag: '',
      descricao: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    event.preventDefault();
    const { dispatchData } = this.props;
    dispatchData(this.state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const methods = ['Dinheiro', 'Cartão de crédito',
      'Cartão de débito'];

    const tags = ['Alimentação', 'Lazer', 'Trabalho',
      'Transporte', 'Saúde'];

    const {
      valor, moeda,
      metodoDePagamento,
      tag, descricao } = this.state;

    return (
      <form onSubmit={ this.handleOnClick }>
        <Input
          type="number"
          name="valor"
          label="Valor: "
          value={ valor }
          onChange={ this.handleChange }
          dataTestId="value-input"
        />
        <SelectOption
          id="moeda"
          defaultOption="Selecione"
          name="moeda"
          label="Moeda: "
          value={ moeda }
          onChange={ this.handleChange }
          dataTestId="currency-input"
          // options={}
        />
        <SelectOption
          id="pagamento"
          defaultOption="Selecione"
          name="pagamento"
          label="Método de pagamento: "
          value={ metodoDePagamento }
          onChange={ this.handleChange }
          dataTestId="method-input"
          options={ methods }
        />
        <SelectOption
          id="tag"
          defaultOption="Selecione"
          name="tag"
          label="Tag: "
          value={ tag }
          onChange={ this.handleChange }
          dataTestId="tag-input"
          options={ tags }
        />
        <TextArea
          name="descricao"
          label="Descrição: "
          value={ descricao }
          onChange={ this.handleChange }
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
