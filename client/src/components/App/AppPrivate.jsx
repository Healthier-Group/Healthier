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
import CreateCategoryForm from '../Categories/CreateCategoryForm';
import CategoryList from '../Categories/CategoryList';
import UpdateCategory from '../Categories/UpdateCategoryForm';
import DeleteCategory from '../Categories/DeleteCategory'
import Carousel from '../Carousel/Carousel';

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

				{/* ============ Products =================== */}
                <Route exact path="/private/form" component={CreateProductForm} />
				<Route exact path="/private/updateproduct/:id" component={ProductUpdate} />
				<Route exact path="/private/productlist" component={ProductList} />

				{/* ============ Categories =================== */}
				<Route exact path="/private/catform" component={CreateCategoryForm} />
				<Route exact path="/private/updateCategory/:id" component={UpdateCategory} />
				<Route exact path="/private/deletecategory/:id" component={DeleteCategory} />
				<Route exact path="/private/categorylist" component={CategoryList} /> 
				{/* ============ Carousel =================== */}
                <Route exact path="/private/test" component={Carousel} />

            </BrowserRouter>

	);
}

export default AppPrivate;