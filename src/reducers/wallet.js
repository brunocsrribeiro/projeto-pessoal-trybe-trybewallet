import {
  ADD_EXPENSES,
  REMOVE_EXPENSES,
  GET_CURRENCIES_ACTION } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const stateWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES_ACTION:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case ADD_EXPENSES:
    // REF.: Essa estrutura eu fiz com ajuda do colega Leonardo Henrique.
    action.expense.exchangeRates = action.rates;
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expense,
      ],
    };
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default stateWallet;
