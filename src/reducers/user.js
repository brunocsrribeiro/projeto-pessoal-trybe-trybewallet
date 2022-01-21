import { GET_USER_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const stateUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER_LOGIN:
    return {
      email: action.email,
    };

  default:
    return state;
  }
};

export default stateUser;
