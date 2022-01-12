export const GET_LOGIN = 'GET_LOGIN';
export const GET_WALLET = 'GET_WALLET';

export const getLogin = (email) => ({
  type: GET_LOGIN,
  payload: {
    email,
  },
});
