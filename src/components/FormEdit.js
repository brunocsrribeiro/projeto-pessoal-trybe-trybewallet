import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editExpensesAction } from '../actions';

import Input from './Input';
import SelectOption from './SelectOption';
import TextArea from './TextArea';
import Button from './Button';
import { ContainerForms, FormStyle } from '../styles';

const ALIMENTACAO = 'Alimentação';

class FormEdit extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTACAO,
    };

    this.saveEditExpenses = this.saveEditExpenses.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.recoveryExpenseToEdit = this.recoveryExpenseToEdit.bind(this);
  }

  componentDidMount() {
    this.recoveryExpenseToEdit();
  }

  recoveryExpenseToEdit() {
    const { getExpenses, idToEdit } = this.props;
    getExpenses.forEach((expense) => {
      if (expense.id === idToEdit) {
        this.setState((prevState) => ({
          ...prevState,
          ...expense,
        }));
      }
    });
  }

  saveEditExpenses() {
    const { getExpenses, idToEdit, saveEditExpense } = this.props;
    const newExpenses = getExpenses
      .filter((expense) => expense.id !== idToEdit);

    saveEditExpense([...newExpenses, this.state]);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { exchangeRates } = this.state;
    const codeCurrency = exchangeRates
      ? Object.keys(exchangeRates) : ['USD'];

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
            dataTestId="value-input"
          />
          <SelectOption
            id="currency"
            name="currency"
            labelText="Moeda"
            value={ !currency ? 'USD' : currency }
            onChange={ this.handleOnChange }
            dataTestId="currency-input"
            options={ codeCurrency }
          />
          <SelectOption
            id="method"
            name="method"
            labelText="Método de pagamento"
            value={ !method ? 'Dinheiro' : method }
            onChange={ this.handleOnChange }
            dataTestId="method-input"
            options={ methods }
          />
          <SelectOption
            id="tag"
            name="tag"
            labelText="Tag"
            value={ !tag ? ALIMENTACAO : tag }
            onChange={ this.handleOnChange }
            dataTestId="tag-input"
            options={ tags }
          />
          <TextArea
            name="description"
            labelText="Descrição"
            value={ description }
            onChange={ this.handleOnChange }
            maxLength="500"
            dataTestId="description-input"
          />
          <Button
            id="wallet-btn"
            type="button"
            labelText="Editar despesa"
            onClick={ this.saveEditExpenses }
          />
        </FormStyle>
      </ContainerForms>
    );
  }
}

const mapStateToProps = (state) => ({
  idToEdit: state.wallet.idToEdit,
  getExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveEditExpense: (expenses) => dispatch(editExpensesAction(expenses)),
});

FormEdit.propTypes = {
  dispatchEditing: PropTypes.func,
  setEditExpense: PropTypes.func,
  idToEdit: PropTypes.number,
  getExpenses: PropTypes.instanceOf(Array),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
