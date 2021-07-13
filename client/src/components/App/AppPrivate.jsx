import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import LandingPage from '../LandingPage/LandingPage'
import NavBar from '../NavBar/NavBar'
import CreateUser from '../Users/UserAdd/CreateUser';
import UpdateUser from '../Users/UserUpdate/UpdateUser';
import UserList from '../Users/UserList/UserList';
import CreateProductForm from "../Products/CreateProductForm";
import ProductUpdate from '../Products/UpdateProductsForm';
import ProductList from '../Products/ProductList'

function AppPrivate() {
	return (

			<BrowserRouter>
				
				{/* ============ LandingPage =================== */}
				<Route path="/" component={NavBar} />
				<Route exact path="/" component={LandingPage} />

				{/* ============ User ==================== */}
				<Route exact path="/private/createuser" component={CreateUser} />
                <Route exact path="/private/updateuser/:id" component={UpdateUser} />
				<Route exact path="/private/userlist" component={UserList} />

				{/* ============ Productos =================== */}
                <Route path="/private/form" component={CreateProductForm} />
				<Route path="/private/updateproduct" component={ProductUpdate} />
				<Route path="/private/productlist" component={ProductList} />

            </BrowserRouter>

	);
}

export default AppPrivate;