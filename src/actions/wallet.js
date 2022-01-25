import requestApiService from '../services/serviceAPI';

export const REMOVE_EXPENSES_ACTION = 'REMOVE_EXPENSES_ACTION';
export const GET_CURRENCIES_ACTION = 'GET_CURRENCIES_ACTION';
export const UPDATE_EXPENSE_ACTION = 'UPDATE_EXPENSE_ACTION';
export const EDIT_EXPENSES_ACTION = 'EDIT_EXPENSES_ACTION';
export const ADD_EXPENSES_ACTION = 'ADD_EXPENSES_ACTION';
export const SET_EDIT_ACTION = 'SET_EDIT_ACTION';
export const SET_ID_ACTION = 'SET_ID_ACTION';

export const getCurrenciesAction = (payload) => ({
  type: GET_CURRENCIES_ACTION,
  payload,
});

export const addExpensesAction = (expense, rates) => ({
  type: ADD_EXPENSES_ACTION,
  expense,
  rates,
});

export const setEditAction = (payload) => ({
  type: SET_EDIT_ACTION,
  payload,
});

export const setIdAction = (payload) => ({
  type: SET_ID_ACTION,
  payload,
});

export const editExpensesAction = (expenses) => ({
  type: EDIT_EXPENSES_ACTION,
  expenses,
});

export const removeExpensesAction = (payload) => ({
  type: REMOVE_EXPENSES_ACTION,
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
  dispatch(addExpensesAction(expense, rates));
};
