import { GET_CURRENCIES, GET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const stateWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      currencies: action.payload.currencies,
    };
  case GET_EXPENSES:
    return {
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
};

export default stateWallet;
