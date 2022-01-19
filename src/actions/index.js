export const GET_LOGIN = 'GET_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const getLogin = (email) => ({
  type: GET_LOGIN,
  email,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const getExpenses = (expenses) => ({
  type: GET_EXPENSES,
  expenses,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const removeExpenses = (payload) => ({
  type: REMOVE_EXPENSES,
  payload,
});

// export const getData = (formData) => (dispatch) => {
//   fetch('https://economia.awesomeapi.com.br/json/all')
//     .then((response) => response.json())
//     .then((exchangeRates) => {
//       const allInfo = { ...formData, exchangeRates };
//       dispatch(saveAll(allInfo));
//     });
// };
