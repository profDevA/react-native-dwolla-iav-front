import { combineReducers } from 'redux'
import * as sessionReducer from './session'

// Reducer for navigation
import AppNavigator from '../routes'
const navReducer = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const session = Object.assign(
	sessionReducer
);

export default combineReducers({
	nav: navReducer,
	...session,
});