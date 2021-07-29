import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrderById } from "../../redux/order/orderActions";
import MessageBox from "./MessageBox";
import {
  Button,
  Divider,
  Grid,
  Hidden,
  List,
  Paper,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

//import { createOrder } from "../../redux/order/orderActions";
//import LoadingBox from "../Components/LoadingBox";

export default function OrderScreen(props) {
  const orderId = props.match.params.id;

  const [sdkReady, setSdkReady] = useState(false);
  const [link, setLink] = useState("");
  const dispatch = useDispatch();
  const { currentUserOrder } = useSelector((state) => state.orderReducer);

  const { orderProducts } = useSelector((state) => state.orderProductReducer);
  const { user } = useSelector((state) => state.userReducer);
  console.log("usuario", user);
  const products = [];
  orderProducts?.forEach((OP) => {
    products.push({
      id: OP.id,
      name: OP.product.name,
      image: OP.product.image,
      price: OP.product.price,
      product: OP.product.id,
      countInStock: 10,
      qty: OP.quantity,
    });
  });
  const infoMP = {
    products,
    currentUserOrder,
  };
  console.log("que hay en infoMP", infoMP);

  const postHistory = async (id, order) => {
    await dispatch(getOrderById(id));
    await dispatch(mercadoPagoHandler(order));
  };

  useEffect(() => {
    dispatch(getOrderById(orderId));
    if (currentUserOrder.paymentMethod === "paypal") {
      const addPayPalScript = async () => {
        const { data } = await axios.get("/api/config/paypal");
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
        script.async = true;
        script.onload = () => {
          setSdkReady(true);
        };
        document.body.appendChild(script);
      };
      if (!orderId.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    } else {
      //nos metemos a mercado pago
      postHistory(orderId, infoMP);
      //pay();
    }
  }, []);

  function mercadoPagoHandler(products) {
    console.log("esto es desde el front", products);
    return async function () {
      const mercadoPago = await axios
        .post(`http://localhost:3001/mercadopago`, products)
        .then((respuesta) => {
          setLink(respuesta.data.link);
          console.log("Rta", respuesta);
        });

      return mercadoPago;
    };
  }

  const successPaymentHandler = (paymentResult) => {
    //dispatch(payOrder(order, paymentResult));
  };

  return (
    <div>
      {/* <h1>Order </h1>

      <div className='row top'>
        <div className='col-2'>
          <ul>
            <li>
              <div className='card card-body'>
                <h2>Datos de envío</h2>
                <p>
                  <strong>Nombre:</strong> {currentUserOrder.fullName}
                  <br />
                  <strong>Address:</strong> {currentUserOrder.address},
                  {currentUserOrder.city},{currentUserOrder.postalCode},
                </p>
              </div>
            </li>
            <li>
              <div className='card card-body'>
                <h2>Método de Pago</h2>
                <p>
                  <strong>Method:</strong> {currentUserOrder.paymentMethod}
                </p>
                {currentUserOrder.isPaid ? (
                  <MessageBox variant='success'>
                    Paid at {currentUserOrder.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant='danger'>Not Paid </MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className='card card-body'>
                <h2>Articulos </h2>
                <ul>
                  {products.map((item) => (
                    <li key={item.product}>
                      <div className='row'>
                        <div>
                          <img src={item.image} alt={item.name} width='100px' />
                        </div>
                        <div className='min-30'>{item.name}</div>
                        <div>
                          {item.qty}x${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <h2>Resumen de la orden</h2>
              </li>
              <li>
                <div className='row'>
                  <div>Items</div>
                  <div>${products.price}</div>
                </div>
              </li>
              
              <li>
                <div className='row'>
                  <div>
                    <strong>Precio Total</strong>
                  </div>
                  <div>
                    <strong>${currentUserOrder.total}</strong>
                  </div>
                </div>
              </li>
              {!currentUserOrder.isPaid && (
                <li>
                  {!sdkReady ? (
                    <h4>ok</h4>
                  ) : (
                   
                    <PayPalButton
                      amount={currentUserOrder.total}
                      onSuccess={successPaymentHandler}
                    ></PayPalButton>
                  )}
                </li>
              )}
              <li>
                <button>
                  <a href={link}>Pagar con MercadoPago</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div style={{ minHeight: "100vh", margin: "auto" }}>
        <Hidden only={["xs", "sm"]}>
          <Paper
            elevation={3}
            style={{
              margin: "auto",
              width: "80vw",
              marginTop: "10vh",
              padding: "50px",
            }}
          >
            <Typography variant="h3">Tu orden de compra</Typography>
            <Divider />
            <Typography>Datos de envío</Typography>
            <Typography>
              <b>Nombre:</b> {currentUserOrder.fullName}
            </Typography>
            <Typography>
              <b>Dirección:</b> {currentUserOrder.address},
              {currentUserOrder.city},{currentUserOrder.postalCode},
            </Typography>
            <Divider />
            <Typography>Metodo de pago</Typography>
            <Typography>
              Procesador: {currentUserOrder.paymentMethod}
            </Typography>
            {currentUserOrder.isPaid ? (
              <MessageBox variant="success">
                Paid at {currentUserOrder.paidAt}
              </MessageBox>
            ) : (
              <MessageBox variant="danger">Not Paid </MessageBox>
            )}
            <Divider />
            <Typography>Articulos</Typography>
            <List>
              {products.map((item) => (
                <List item key={item.product}>
                  <Grid container>
                    <Grid item xs={4} style={{ margin: "auto" }}>
                      <img src={item.image} alt={item.name} width="100px" />
                    </Grid>
                    <Grid item xs={4} style={{ margin: "auto" }}>
                      {item.name}
                    </Grid>
                    <Grid item xs={4} style={{ margin: "auto" }}>
                      {item.qty}x${item.price} = ${item.qty * item.price}
                    </Grid>
                  </Grid>
                </List>
              ))}
            </List>
            <Divider />
            <Typography>Resumen de su orden</Typography>
            <Typography>Items</Typography>
            <Typography>$ {products.price}</Typography>
            <Divider />
            <Typography>Precio Total</Typography>
            <Typography>$ {currentUserOrder.total}</Typography>
            <List>
              {!currentUserOrder.isPaid && (
                <List item>
                  {!sdkReady ? (
                    <h4>ok</h4>
                  ) : (
                    <PayPalButton
                      amount={currentUserOrder.total}
                      onSuccess={successPaymentHandler}
                    ></PayPalButton>
                  )}
                </List>
              )}
            </List>
            <Divider />
            <List
              style={{
                position: "relative",
                left: "70vw",
                marginTop: "20px",
              }}
            >
              <Button variant="contained" color="secondary">
                <Link to={link} style={{color:"black", textDecoration: "none" }}>Pagar</Link>
              </Button>
            </List>
          </Paper>
        </Hidden>
        {/* Mobile screen */}
        <Hidden only={["md", "lg", "xl"]}>
          <Paper
            elevation={3}
            style={{
              margin: "auto",
              width: "60vw",
              marginTop: "10vh",
              padding: "50px",
            }}
          >
            <Typography variant="h3">Tu orden de compra</Typography>
            <Divider />
            <Typography>Datos de envío</Typography>
            <Typography>
              <b>Nombre:</b> {currentUserOrder.fullName}
            </Typography>
            <Typography>
              <b>Dirección:</b> {currentUserOrder.address},
              {currentUserOrder.city},{currentUserOrder.postalCode},
            </Typography>
            <Divider />
            <Typography>Metodo de pago</Typography>
            <Typography>
              Procesador: {currentUserOrder.paymentMethod}
            </Typography>
            {currentUserOrder.isPaid ? (
              <MessageBox variant="success">
                Paid at {currentUserOrder.paidAt}
              </MessageBox>
            ) : (
              <MessageBox variant="danger">Not Paid </MessageBox>
            )}
            <Divider />
            <Typography>Articulos</Typography>
            <List>
              {products.map((item) => (
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
                        width="100px"
                        style={{ margin: "auto" }}
                      />
                      <br />
                      <Typography style={{ textAlign: "center" }}>
                        {item.name}
                      </Typography>
                      <br />
                      <Typography style={{ textAlign: "center" }}>
                        {item.qty}x${item.price} = ${item.qty * item.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </List>
              ))}
            </List>
            <Divider />
            <Typography>Resumen de su orden</Typography>
            <Typography>Items</Typography>
            <Typography>$ {products.price}</Typography>
            <Divider />
            <Typography>Precio Total</Typography>
            <Typography>$ {currentUserOrder.total}</Typography>
            <List>
              {!currentUserOrder.isPaid && (
                <List item>
                  {!sdkReady ? (
                    <h4>ok</h4>
                  ) : (
                    <PayPalButton
                      amount={currentUserOrder.total}
                      onSuccess={successPaymentHandler}
                    ></PayPalButton>
                  )}
                </List>
              )}
            </List>
            <Divider />
            <List
              style={{
                position: "relative",
                left: "35vw",
                marginTop: "20px",
              }}
            >
              <Button variant="contained" color="secondary">
                <Link to={link} style={{color:"black", textDecoration: "none" }}>Pagar</Link>
              </Button>
            </List>
          </Paper>
        </Hidden>
      </div>
    </div>
  );
}
