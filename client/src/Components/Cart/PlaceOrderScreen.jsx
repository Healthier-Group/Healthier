import {
  Paper,
  Grid,
  Typography,
  Divider,
  List,
  Button,
  Hidden,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from '../../redux/order/orderActions'

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  // const {} = cart
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice - cart.taxPrice;
  
  const {orders} = useSelector( state => state.orderReducer);
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(getOrders())
  }, [])
  console.log("orders: ", orders);
  const placeOrderhandler = () => {
    //Todo
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Hidden only={["xs", "sm"]}>
        <Paper
          style={{
            margin: "auto",
            width: "80vw",
            marginTop: "10vh", 
            padding: "50px",
          }}
        >
          <Typography variant='h3'>Detalles de Envío</Typography>
          <Divider style={{ margin: "20px 0 " }} />
          <Typography>
            Nombre: <b> {cart.shippingAddress.fullName}</b>
          </Typography>
          <Typography>
            Dirección:{" "}
            <b>
              {cart.shippingAddress.address},{cart.shippingAddress.city},
              {cart.shippingAddress.postalCode}
            </b>
          </Typography>
          <Typography>
            Método de pago: <b>{cart.paymentMethod}</b>
          </Typography>
          <Divider style={{ margin: "20px 0 " }} />
          <Typography variant='h4'>Tus Productos</Typography>
          <List>
            {cart.cartItems.map((item) => (
              <List item key={item.product}>
                <Grid
                  container
                  style={{ borderTop: "1px solid lightgrey", padding: "10px" }}
                >
                  <Grid
                    item
                    xs={1}
                    style={{
                      margin: "auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={item.image} alt={item.name} width='100px' />
                  </Grid>
                  <Divider orientation='vertical' flexItem />
                  <Grid
                    item
                    xs={7}
                    style={{ margin: "auto", textAlign: "center" }}
                  >
                    <Link
                      to={`/product/${item.product}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <Typography variant='p'>{item.name}</Typography>
                    </Link>
                  </Grid>
                  <Divider orientation='vertical' flexItem />
                  <Grid
                    item
                    xs={2}
                    style={{ margin: "auto", textAlign: "center" }}
                  >
                    {item.qty}x $ {item.price}
                  </Grid>
                </Grid>
              </List>
            ))}
          </List>
          <Divider style={{ margin: "20px 0 " }} />
          <Typography variant='h5' style={{ marginBottom: "20px" }}>
            Detalle de orden
          </Typography>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Typography>
              Envío <b>$ {cart.shippingPrice.toFixed(2)}</b>
            </Typography>

            <Typography>
              Productos <b>$ {cart.itemsPrice.toFixed(2)}</b>
            </Typography>

            <Typography>
              Descuentos <b>$ {cart.taxPrice.toFixed(2)}</b>
            </Typography>
          </div>

          <Divider style={{ margin: "20px 0 " }} />
          <Typography style={{ position: "relative", left: "70vw" }}>
            Precio Final
          </Typography>
          <Typography style={{ position: "relative", left: "70vw" }}>
            <b>$ {cart.totalPrice.toFixed(2)}</b>
          </Typography>
          <Divider style={{ margin: "20px 0 " }} />
          <Button
            variant='contained'
            onClick={placeOrderhandler}
            className='primary block'
            disabled={cart.cartItems.length === 0}
            style={{ position: "relative", left: "70vw" }}
            color='secondary'
          >
            Confirmar Orden
          </Button>
        </Paper>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <Paper
          style={{
            margin: "auto",
            width: "60vw",
            height: "fit-content",
            marginTop: "10vh",
            marginBottom: "10vh",
            padding: "50px",
          }}
        >
          <Typography variant='h4'>Detalles de envío</Typography>
          <Divider style={{ margin: "20px 0 " }} />
          <Typography>
            Nombre: <b> {cart.shippingAddress.fullName}</b>
          </Typography>
          <Typography>
            Dirección:{" "}
            <b>
              {cart.shippingAddress.address},{cart.shippingAddress.city},
              {cart.shippingAddress.postalCode}
            </b>
          </Typography>
          <Typography>
            Método de pago: <b>{cart.paymentMethod}</b>
          </Typography>
          <Divider style={{ margin: "20px 0 " }} />
          <Typography variant='h4'>Tus Productos</Typography>
          <List>
            {cart.cartItems.map((item) => (
              <List item key={item.product}>
                <Grid
                  container
                  style={{
                    borderTop: "1px solid lightgrey",
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
                      width='100px'
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
                      <Typography variant='p'>{item.name}</Typography>
                    </Link>
                    <br />
                    <Typography variant='p' style={{ textAlign: "center" }}>
                      {item.qty}x $ {item.price}
                    </Typography>
                  </Grid>
                </Grid>
              </List>
            ))}
          </List>
          <Divider style={{ margin: "20px 0 " }} />
          <Typography variant='h5' style={{ marginBottom: "20px" }}>
            Detalle de orden
          </Typography>

          <Typography>
            Envío: <b> ${cart.shippingPrice.toFixed(2)}</b>
          </Typography>
          <br />
          <Typography>
            Productos: <b> ${cart.itemsPrice.toFixed(2)}</b>
          </Typography>
          <br />
          <Typography>
            Descuento: <b> ${cart.taxPrice.toFixed(2)}</b>
          </Typography>

          <Divider style={{ margin: "20px 0 " }} />
          <Typography style={{ position: "relative", left: "40vw" }}>
            Precio final
          </Typography>
          <Typography style={{ position: "relative", left: "40vw" }}>
            <b>$ {cart.totalPrice.toFixed(2)}</b>
          </Typography>
          <Divider style={{ margin: "20px 0 " }} />
          <Button
            variant='contained'
            onClick={placeOrderhandler}
            className='primary block'
            disabled={cart.cartItems.length === 0}
            style={{ position: "relative", left: "30vw" }}
            color='secondary'
          >
            Confirmar Orden
          </Button>
        </Paper>
      </Hidden>
    </div>
  );
}
