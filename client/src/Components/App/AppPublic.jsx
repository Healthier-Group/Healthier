import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router'
import LandingPage from '../LandingPage/LandingPage'
import NavBar from '../NavBar/NavBar'
import CreateUser from '../Users/UserAdd/CreateUser';
import ProductCard from "../Products/ProductCard";
import ProductDetail from "../Products/ProductDetail";
import Recipes from "../Recipes/Recipes";
import CartScreen from "../Cart/CartScreen";
import SigninScreen from "../Cart/SigninSceen";
import ShippingAddressScreen from '../Cart/ShippingAddressScreen';
import PaymentMethodScreen from '../Cart/PaymentMethodScreen';
import PlaceOrderScreen from '../Cart/PlaceOrderScreen';
import OrderScreen from '../Cart/OrderScreen';

function AppPublic() {
	return (
			<BrowserRouter>

				{/* ============ LandingPage ==================== */}
				<Route path="/" component={NavBar} />
				<Route exact path="/" component={LandingPage} />

				{/* ============ User ==================== */}
				<Route exact path="/register" component={CreateUser} />
				<Route exact path="/signin" component={SigninScreen} />
				

				{/* ============ Productos ==================== */}
				<Route path="/recipes" exact component={Recipes} />
				<Route exact path="/products/:id" component={ProductDetail} />
				<Route  exact path="/products" component={ProductCard} />

				{/* ============ Cart ==================== */}
				<Route exact path='/cart/:id?' component={CartScreen}></Route>
				<Route exact path="/shipping" component={ShippingAddressScreen} />
				<Route exact path="/payment" component={PaymentMethodScreen} />
				<Route exact path='/placeorder' component={PlaceOrderScreen} ></Route>
				<Route path='/order/:id' component={OrderScreen} exact></Route>
            </BrowserRouter>
	);
}

export default AppPublic;
