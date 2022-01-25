import {
  ADD_EXPENSES_ACTION,
  EDIT_EXPENSES_ACTION,
  GET_CURRENCIES_ACTION,
  REMOVE_EXPENSES_ACTION,
  SET_EDIT_ACTION,
  SET_ID_ACTION,
  UPDATE_EXPENSE_ACTION } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isEdit: false,
};

const stateWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES_ACTION:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case ADD_EXPENSES_ACTION:
    // REF.: Essa estrutura, eu fiz com ajuda do colega Leonardo Henrique.
    action.expense.exchangeRates = action.rates;
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expense,
      ],
    };
  case SET_EDIT_ACTION:
    return {
      ...state,
      isEdit: action.payload,
    };
  case SET_ID_ACTION:
    return {
      ...state,
      idToEdit: action.payload,
      isEdit: true,
    };
  case EDIT_EXPENSES_ACTION:
    return {
      ...state,
      expenses: action.expenses,
      isEdit: false,
    };
  case REMOVE_EXPENSES_ACTION:
    return {
      ...state,
      expenses: action.payload,
    };
  case UPDATE_EXPENSE_ACTION:
    return {
      ...state,
      id: action.id,
    };
  default:
    return state;
  }
};

export default stateWallet;
