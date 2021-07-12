import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import Container from '@material-ui/core/Container';
import LandingPage from '../LandingPage/LandingPage'
import Navigation from '../NavBar/Navigation'
import CreateUser from '../Users/UserAdd/CreateUser';
import Container from "./Components/Container/Container";
import ProductCard from "./Components/Products/ProductCard";
import ProductDetail from "./Components/Products/ProductDetail";
import Recipes from "./Components/Recipes/Recipes";

function AppPublic() {
	return (
		<Container className="App">
			<BrowserRouter>

				<Route path="/" component={Navigation} />
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/register" component={CreateUser} />

				/* ============ Productos ==================== */
				<Route path="/" exact component={Container} />
				<Route path="/recipes" exact component={Recipes} />
				<Route path="/products/:id" component={ProductDetail} />
				<Route path="/products" component={ProductCard} />
                //update de datos propios de
                //leer su perfil

            </BrowserRouter>
		</Container>
	);
}

export default AppPublic;
