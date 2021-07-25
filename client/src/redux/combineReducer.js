import {combineReducers} from 'redux';

import userReducer from './users/userReducer';
import productReducer from './products/productReducer';
import cartReducer from './cart/cartReducer';
import wishListReducer from './wishlist/reducerWishList';
import orderReducer from './order/orderReducers'
import orderProductReducer from './orderProducts/orderProductReducer';

export const reducers = combineReducers({
	userReducer: userReducer,
	productReducer: productReducer,
	cart: cartReducer,

	wishList:wishListReducer,
	orderProductReducer: orderProductReducer,
	orderReducer: orderReducer,

});

export default reducers;
