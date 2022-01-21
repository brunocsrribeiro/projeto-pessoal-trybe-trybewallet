import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import { removeExpensesAction } from '../actions';

class Table extends Component {
  constructor() {
    super();

    this.currencyName = this.currencyName.bind(this);
    this.currencyExchange = this.currencyExchange.bind(this);
  }

  currencyName = (data) => {
    const currency = Object.assign(data.currency).split();
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

  // REF.: Essa função eu fiz com  a ajuda do colega Luca Oliveira.
  handleClick = (event) => {
    const { expensesTable } = this.props;
    const deleteExpenseInfo = expensesTable
      .filter((evt) => Number(evt.id) !== Number(event.target.value));

    return deleteExpenseInfo;
  }

  render() {
    const { expensesTable, remove } = this.props;
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
            expensesTable.map((data) => (
              <tr key={ data.id }>
                <td>{ data.description }</td>
                <td>{ data.tag }</td>
                <td>{ data.method }</td>
                <td>{ data.value }</td>
                <td>
                  { this.currencyName(data) }
                </td>
                <td>
                  { this.currencyExchange(data).toFixed(2) }
                </td>
                <td>
                  { (this.currencyExchange(data) * data.value).toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <Button
                    onClick={ (event) => remove(this.handleClick(event)) }
                    labelText="Excluir"
                    dataTestId="delete-btn"
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
  remove: (payload) => dispatch(removeExpensesAction(payload)),
});

Table.propTypes = {
  expensesTable: PropTypes.instanceOf(Array),
}.isRequires;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
