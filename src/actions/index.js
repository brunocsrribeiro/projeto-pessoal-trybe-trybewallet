export const GET_LOGIN = 'GET_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';

export const getLogin = (email) => ({
  type: GET_LOGIN,
  payload: {
    email,
  },
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: {
    currencies,
  },
});

export const getExpenses = (expenses) => ({
  type: GET_EXPENSES,
  payload: {
    expenses,
  },
});
