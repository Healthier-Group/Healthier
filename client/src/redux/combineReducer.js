import {combineReducers} from 'redux';

import userReducer from './users/userReducer';
import productReducer from './products/productReducer';
import cartReducer from './cart/cartReducer';

export const reducers = combineReducers({
	userReducer: userReducer,
	productReducer: productReducer,
	cart: cartReducer
});

export default reducers;
