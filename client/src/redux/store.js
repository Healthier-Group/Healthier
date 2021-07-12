import {createStore, applyMiddleware, compose} from 'redux';
import combineReducer from './combineReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
	cart: {
		cartItems: localStorage.getItem("cartItems")
		? JSON.parse(localStorage.getItem("cartItems"))
		: [],
	},
};

export const store = createStore(
	combineReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
