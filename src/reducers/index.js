import { combineReducers } from 'redux';
import stateUser from './user';
import stateWallet from './wallet';

const rootReducer = combineReducers({
  user: stateUser,
  wallet: stateWallet,
});

export default rootReducer;
