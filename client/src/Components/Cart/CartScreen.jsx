import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCurrentUser } from "../../redux/users/userActions";
import { addToCart, removeFromCart } from "../../redux/cart/cartActions";
import {
  deleteOrderProduct,
  getOrderProductsByOrder,
  updateOrderProduct,
} from "../../redux/orderProducts/orderProductActions";
import {
  Paper,
  Typography,
  Divider,
  Grid,
  List,
  Button,
  Hidden,
} from "@material-ui/core";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function CartScreen(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const qty = props.location.search;
  console.log('quantity: ', qty);

  const productId = props.match.params.id;
  //si no le pasamos una propiedad qty nos da 1 por defecto
  //const [qty, setQty] = useState(1)

  const cart = useSelector((state) => state.cart);

  const { currentUser } = useSelector((state) => state.userReducer);
  const orderId = currentUser?.order?.id;
  const { orderProducts } = useSelector((state) => state.orderProductReducer);
  
  const productos = [];
  const updateProducts = () => {
    orderProducts?.forEach((OP) => {
      return OP.product ? 
       productos.push({
        id: OP.id,
        name: OP.product.name,
        image: OP.product.image,
        price: OP.product.price,
        product: OP.product.id,
        countInStock: OP.product.stock,
        qty: OP.quantity,
      }) : null
    });
    console.log(productos);
  };
  /* const productos = [];
  const updateProducts = () => {
    orderProducts?.forEach((OP) => {
       productos.push({
        id: OP.id,
        name: OP.product.name,
        image: OP.product.image,
        price: OP.product.price,
        product: OP.product.id,
        countInStock: OP.product.stock,
        qty: OP.quantity,
      });
    });
    console.log(productos);
  }; */

  updateProducts();

  const cartItems = currentUser ? productos : cart.cartItems;

  // const { cartItems } = cart;

  const removeFromCartHandler = async (id) => {
    if (!currentUser) {
      dispatch(removeFromCart(id));
    } else {
      await dispatch(deleteOrderProduct(id));
      await dispatch(getOrderProductsByOrder(orderId));
    }
  };

  const checkoutHandler = () => {
    //cambiar la ruta de signin
    if (currentUser) {
      history.push("/shipping");
    } else {
      history.push("/login");
    }
    // props.history.push("/login?redirect=shipping");
  };

  useEffect(
    () => {
      if (!currentUser) {
        if (productId) {
          dispatch(addToCart(productId, qty));
        }
      } else {
        dispatch(getOrderProductsByOrder(orderId));
        dispatch(getCurrentUser());
      }
      updateProducts();
      //despacho a cartAction
    },
    // eslint-disable-next-line
    [
      getOrderProductsByOrder,
      getCurrentUser,
      updateOrderProduct,
      dispatch,
      orderId,
      productId,
      qty,
    ]
  );

  const handlerFunction = async (item, e) => {
    if (currentUser) {
      await dispatch(updateOrderProduct(item.id, { quantity: e }));
      await dispatch(getOrderProductsByOrder(orderId));
    } else {
      dispatch(addToCart(item.product, e));
    }
  };

  return (
    <div>
      <NavBar />
      <Hidden only={["xs", "sm"]}>
        <div style={{ minHeight: "100vh", margin: "auto" }}>
          <Paper
            elevation={3}
            style={{
              margin: "auto",
              width: "80vw",
              marginTop: "10vh",
              padding: "50px",
            }}
          >
            <Typography variant="h6">Tu carrito</Typography>

            <Divider />
            {cartItems?.length === 0 ? (
              <Typography
                variant="h5"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Carrito vacío.{" "}
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  Presiona aquí para seguir comprando
                </Link>
              </Typography>
            ) : (
              <List>
                {cartItems.map((item) => (
                  <List item key={item.product}>
                    <Grid container>
                      <Grid item xs={3} style={{ margin: "auto" }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          width="150px"
                          height="100px"
                        />
                      </Grid>

                      <Grid item xs={5} style={{ margin: "auto" }}>
                        <Link
                          to={`/product/${item.product}`}
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          {item.name}
                        </Link>
                      </Grid>
                      <Grid item xs={2} style={{ margin: "auto" }}>
                        {currentUser ? (
                          <select
                            value={item.qty}
                            onChange={(e) => {
                              handlerFunction(item, Number(e.target.value));
                            }}
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        ) : null}
                      </Grid>
                      <Grid xs={2} style={{ margin: "auto" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="button"
                          onClick={() =>
                            removeFromCartHandler(
                              currentUser ? item.id : item.product
                            )
                          }
                        >
                          Eliminar
                        </Button>
                      </Grid>
                    </Grid>
                  </List>
                ))}
              </List>
            )}
            <Divider />
            <Grid container>
              <Grid item xs={12}>
                <List>
                  <List style={{ position: "relative", left: "50vw" }}>
                    <h2>
                      Total ({cartItems.reduce((a, c) => a + c.qty, 0)} items):
                      ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </h2>
                  </List>
                  <Divider />
                  <List
                    style={{
                      position: "relative",
                      left: "65vw",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      type="button"
                      //href="/shipping"
                      onClick={checkoutHandler}
                      className="primary block"
                      disable={cartItems.length === 0}
                    >
                      Pasar al pago
                    </Button>
                  </List>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <div style={{ minHeight: "100vh", margin: "auto" }}>
          <Paper
            elevation={3}
            style={{
              margin: "auto",
              width: "60vw",
              marginTop: "10vh",
              marginBottom: "10vh",
              padding: "40px",
            }}
          >
            <Typography variant="h6">Tu carrito</Typography>

            <Divider style={{ margin: "20px 0" }} />
            {cartItems.length === 0 ? (
              <Typography
                variant="h5"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Carrito vacío.{" "}
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  Presiona aquí para seguir comprando
                </Link>
              </Typography>
            ) : (
              <List>
                {cartItems.map((item) => (
                  <List item key={item.product}>
                    <Grid
                      container
                      style={{
                        padding: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <Grid
                        item
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          width="150px"
                          height="90px"
                          style={{ margin: "auto" }}
                        />
                        <br />
                        <Link
                          to={`/product/${item.product}`}
                          style={{
                            color: "inherit",
                            textDecoration: "none",
                            textAlign: "center",
                          }}
                        >
                          {item.name}
                        </Link>
                        <br />
                        {currentUser ? (
                          <select
                            value={item.qty}
                            onChange={(e) => {
                              handlerFunction(item, Number(e.target.value));
                            }}
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        ) : null}
                        <br />
                        <Button
                          variant="contained"
                          style={{ width: "220px" }}
                          color="primary"
                          type="button"
                          onClick={() =>
                            removeFromCartHandler(
                              currentUser ? item.id : item.product
                            )
                          }
                        >
                          Eliminar
                        </Button>
                      </Grid>
                    </Grid>
                  </List>
                ))}
              </List>
            )}
            <Divider style={{ margin: "20px 0" }} />
            <Grid container>
              <Grid item xs={12}>
                <List>
                  <List style={{ position: "relative", left: "10vw" }}>
                    <Typography variant="p">
                      Total ({cartItems.reduce((a, c) => a + c.qty, 0)} items) :
                      ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </Typography>
                  </List>
                  <Divider style={{ margin: "20px 0" }} />
                  <List
                    style={{
                      position: "relative",
                      left: "20vw",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      type="button"
                      //href="/shipping"
                      onClick={checkoutHandler}
                      disable={cartItems.length === 0}
                    >
                      Pasar al pago
                    </Button>
                  </List>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Hidden>
      <Footer />
    </div>
  );
}
