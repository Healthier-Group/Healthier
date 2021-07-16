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

function AppPublic() {

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

				{/* ============ LandingPage ==================== */}
				<Route path="/" component={NavBar} />
				<Route exact path="/" component={LandingPage} />

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
