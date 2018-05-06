import { combineReducers } from 'redux';
import authReducer from './authReducer';
import secretSantaReducer from './secretSantaReducer';

export default combineReducers({
	auth: authReducer,
	secretSanta: secretSantaReducer
})