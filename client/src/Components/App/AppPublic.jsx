import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Redirect} from 'react-router';
import LandingPage from '../LandingPage/LandingPage'
import NavBar from '../NavBar/NavBar'
import ProductCard from "../Products/ProductCard";
import ProductDetail from "../Products/ProductDetail";
import Recipes from "../Recipes/Recipes";
import CartScreen from "../Cart/CartScreen";
import CreateUser from '../Users/UserAdd/CreateUser';
import UserLogin from "../Users/UserLogin/UserLogin";
import Footer from '../Footer/Footer'
import ShippingAddressScreen from '../Cart/ShippingAddressScreen';
import PaymentMethodScreen from '../Cart/PaymentMethodScreen';
import PlaceOrderScreen from '../Cart/PlaceOrderScreen';
import OrderScreen from '../Cart/OrderScreen';
import ResetPassword from '../Users/UserResetPassword/ResetPassword'

function AppPublic() {
// eslint-disable-next-line
	const [currentUser, setCurrentUser] = React.useState(JSON.parse(localStorage.getItem('profile')));

	return (
			<BrowserRouter>

				{/* ============== User =====================*/}
				<Route 
					exact path="/register"
					component={ () => (
						( !currentUser )
						? 
						( <CreateUser /> )
						:
						(
							currentUser.isAdmin
							?
							( <Redirect to="/private/panel" /> )
							:
							( <Redirect to={`/`} /> )
						) 
					)}
				/>

				<Route 
					exact path="/login"
					component={ () => (
						( !currentUser )
						? 
						( <UserLogin /> )
						:
						(
							currentUser.isAdmin
							?
							( <Redirect to="/private/panel" /> )
							:
							( <Redirect to={`/`} /> )
						) 
					)}
				/>
				<Route 
						path="/verify" 
						component = {ResetPassword}
				/>

				{/* ============ LandingPage ==================== */}
				<Route path="/" component={NavBar} />
				<Route exact path="/" component={LandingPage} />
				<Route path="/" component={Footer} />
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
