import {combineReducers} from 'redux';

import userReducer from './users/userReducer';
import productReducer from './products/productReducer';
import cartReducer from './cart/cartReducer';
import wishListReducer from './wishlist/reducerWishList';

export const reducers = combineReducers({
	userReducer: userReducer,
	productReducer: productReducer,
	cart: cartReducer,
<<<<<<< HEAD
	
=======
	wishList:wishListReducer,
>>>>>>> main-test
});

export default reducers;
