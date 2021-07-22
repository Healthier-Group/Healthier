import {combineReducers} from 'redux';

import userReducer from './users/userReducer';
import productReducer from './products/productReducer';
import cartReducer from './cart/cartReducer';
import wishListReducer from './wishlist/reducerWishList';
import orderReducer from './order/orderReducers'

export const reducers = combineReducers({
	userReducer: userReducer,
	productReducer: productReducer,
	cart: cartReducer,
	wishList:wishListReducer,
	orderReducer: orderReducer
});

export default reducers;
