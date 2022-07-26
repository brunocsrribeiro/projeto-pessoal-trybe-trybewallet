import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import { removeExpensesAction,
  setIdAction } from '../actions';

class Table extends Component {
  constructor() {
    super();

    this.currencyName = this.currencyName.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.currencyExchange = this.currencyExchange.bind(this);
  }

  currencyName = (data) => {
    const currency = Object.values(data.currency).join('');
    const name = Object.assign(data.exchangeRates[currency].name)
      .replace('/Real Brasileiro', '');

    return (name === 'Dólar Americano')
      ? 'Dólar Comercial'
      : name;
  };

  currencyExchange = (data) => {
    const currencyValue = Number(Object.values(data.exchangeRates)
      .filter((rates) => rates.code === data.currency)
      .map((price) => price.ask)[0]);

    return currencyValue;
  }

  // REF.: Essa função eu fiz com  a ajuda do colega Lucas Oliveira.
  onClickDelete = (id) => {
    const { expensesTable } = this.props;
    const deleteExpenseInfo = expensesTable
      .filter((expense) => Number(expense.id) !== Number(id));

    return deleteExpenseInfo;
  }

  render() {
    const { expensesTable,
      dispatchRemove,
      dispatchIdEdit } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expensesTable.sort((a, b) => a.id - b.id).map((data) => (
              <tr key={ data.id }>
                <td>{ data.description }</td>
                <td>{ data.tag }</td>
                <td>{ data.method }</td>
                <td>{ data.value }</td>
                <td>{ this.currencyName(data) }</td>
                <td>{ this.currencyExchange(data).toFixed(2) }</td>
                <td>{ (this.currencyExchange(data) * data.value).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <Button
                    value="Editar despesa"
                    onClick={ () => {
                      dispatchIdEdit(data.id);
                    } }
                    labelText="Editar"
                    id="edit-btn"
                  />
                  <Button
                    onClick={ () => dispatchRemove(this.onClickDelete(data.id)) }
                    labelText="Excluir"
                    id="delete-btn"
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesTable: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatchUpdateExpense: (payload) => dispatch(updateExpenseAction(payload)),
  dispatchIdEdit: (id) => dispatch(setIdAction(id)),
  // dispatchEdit: (isEdit) => dispatch(setEditAction(isEdit)),
  dispatchRemove: (payload) => dispatch(removeExpensesAction(payload)),
});

Table.propTypes = {
  // dispatchEdit: PropTypes.func,
  dispatchIdEdit: PropTypes.func,
  dispatchRemove: PropTypes.func,
  isEdit: PropTypes.bool,
  expensesTable: PropTypes.instanceOf(Array),
}.isRequires;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
