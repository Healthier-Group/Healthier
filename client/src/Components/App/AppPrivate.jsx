import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import LandingPage from '../LandingPage/LandingPage'
import NavbarAdmin from '../NavBar/NavbarAdmin'
import CreateUserAdmin from '../Users/UserAdd/CreateUserAdmin';
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
import CreateReview from '../Reviews/CreateReview'
import DeleteReview from '../Reviews/DeleteReview'
import ReviewList from '../Reviews/ReviewList'
import UpdateReview from '../Reviews/UpdateReview'


function AppPrivate() {

	return (

			<BrowserRouter>
				
				{/* ============ LandingPage =================== */}
				<Route path="/" component={NavbarAdmin} />
				<Route exact path="/" component={LandingPage} />

				{/* ============ User ==================== */}
				<Route exact path="/private/createuser" component={CreateUserAdmin} />
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
				{/* ============ Reviews =================== */}
				<Route exact path="/private/reviewform" component={CreateReview} />
				<Route exact path="/private/updatereview/:id" component={UpdateReview} />
				<Route exact path="/private/deletereview/:id" component={DeleteReview} />
				<Route exact path="/private/reviewlist" component={ReviewList} /> 
				{/* ============ Carousel =================== */}
                <Route exact path="/private/test" component={Carousel} />

            </BrowserRouter>

	);
}

export default AppPrivate;