import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";
import LandingPage from "../LandingPage/LandingPage";
import NavBar from "../NavBar/NavBar";
import ProductCard from "../Products/ProductCard";
import ProductDetail from "../Products/ProductDetail";
import Recipes from "../Recipes/Recipes";
import CartScreen from "../Cart/CartScreen";
import CreateUser from "../Users/UserAdd/CreateUser";
import UserLogin from "../Users/UserLogin/UserLogin";
import ShippingAddressScreen from "../Cart/ShippingAddressScreen";
import PaymentMethodScreen from "../Cart/PaymentMethodScreen";
import PlaceOrderScreen from "../Cart/PlaceOrderScreen";
import OrderScreen from "../Cart/OrderScreen";

import WishListScreen from "../WishList/WishListScreen";

import ResetPassword from "../Users/UserResetPassword/ResetPassword";
import Admin2FA from "../Users/Admin2FA/Admin2FA";

function AppPublic() {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  return (
    <BrowserRouter>
      {/* ============== User =====================*/}
      <Route
        exact
        path="/register"
        component={() =>
          !currentUser ? (
            <CreateUser />
          ) : currentUser.isAdmin ? (
            <Redirect to="/private/panel" />
          ) : (
            <Redirect to={`/`} />
          )
        }
      />

      <Route
        exact
        path="/login"
        component={() =>
          !currentUser ? (
            <UserLogin />
          ) : currentUser.isAdmin ? (
            <Redirect to="/private/panel" />
          ) : (
            <Redirect to={`/`} />
          )
        }
      />

      <Route path="/verify/password" component={ResetPassword} />
      <Route path="/verify/admin" component={Admin2FA} />

      {/* ============ LandingPage ==================== */}
      <Route exact path="/" component={NavBar} />
      <Route exact path="/" component={LandingPage} />
      

      {/* ============ Productos ==================== */}
      <Route path="/recipes" exact component={Recipes} />
      <Route exact path="/products/:id" component={ProductDetail} />
      <Route exact path="/products" component={ProductCard} />

      {/* ============ Cart ==================== */}
      <Route exact path="/cart/:id?" component={CartScreen}></Route>
      <Route exact path="/shipping" component={ShippingAddressScreen} />
      <Route exact path="/payment" component={PaymentMethodScreen} />
      <Route exact path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/order/:id" component={OrderScreen} exact></Route>
      <Route path="/wishlist/:id?" component={WishListScreen} exact></Route>
    </BrowserRouter>
  );
}

export default AppPublic;
