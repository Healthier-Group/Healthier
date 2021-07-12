import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import LandingPage from '../LandingPage/LandingPage'
import NavBar from '../NavBar/NavBar'
import CreateUser from '../Users/UserAdd/CreateUser';
import ProductCard from "../Products/ProductCard";
import ProductDetail from "../Products/ProductDetail";
import Recipes from "../Recipes/Recipes";
import CartScreen from "../Cart/CartScreen";

function AppPublic() {
	return (
			<BrowserRouter>

				{/* ============ LandingPage ==================== */}
				<Route path="/" component={NavBar} />
				<Route exact path="/" component={LandingPage} />

				{/* ============ User ==================== */}
				<Route exact path="/register" component={CreateUser} />

				{/* ============ Productos ==================== */}
				<Route path="/recipes" exact component={Recipes} />
				<Route exact path="/products/:id" component={ProductDetail} />
				<Route  exact path="/products" component={ProductCard} />

				{/* ============ Cart ==================== */}
				<Route exact path='/cart/:id?' component={CartScreen}></Route>

            </BrowserRouter>
	);
}

export default AppPublic;
