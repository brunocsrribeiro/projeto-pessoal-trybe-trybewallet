export const GET_USER_LOGIN = 'GET_USER_LOGIN';

export const getUserLogin = (email) => ({
  type: GET_USER_LOGIN,
  email,
});
