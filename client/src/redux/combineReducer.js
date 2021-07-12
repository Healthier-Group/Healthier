import {combineReducers} from 'redux';

import userReducer from './users/userReducer';


export const reducers = combineReducers({
	userReducer: userReducer,
});

export default reducers;
