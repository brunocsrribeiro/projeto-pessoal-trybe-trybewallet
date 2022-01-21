import requestApiService from '../services/serviceAPI';

export const GET_CURRENCIES_ACTION = 'GET_CURRENCIES_ACTION';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const getCurrenciesAction = (payload) => ({
  type: GET_CURRENCIES_ACTION,
  payload,
});

export const addExpenses = (expense, rates) => ({
  type: ADD_EXPENSES,
  expense,
  rates,
});

export const removeExpensesAction = (payload) => ({
  type: REMOVE_EXPENSES,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await requestApiService();

  const payload = {
    currencies: Object.keys(response)
      .filter((currency) => (
        currency !== 'USDT' && currency !== 'DOGE'
      )),
  };

  dispatch(getCurrenciesAction(payload));
};

export const getExchangeRatesThunk = (expense) => async (dispatch) => {
  const rates = await requestApiService();
  dispatch(addExpenses(expense, rates));
};
