import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getOrderById} from "../../redux/order/orderActions";
import MessageBox from "./MessageBox";


//import { createOrder } from "../../redux/order/orderActions";
 //import LoadingBox from "../Components/LoadingBox";



export default function OrderScreen(props) {
  const orderId = props.match.params.id;

  const [sdkReady, setSdkReady] = useState(false);
  const [link, setLink] = useState("");
  const dispatch = useDispatch();
  const { currentUserOrder } = useSelector((state) => state.orderReducer);
 
  const { orderProducts } = useSelector((state) => state.orderProductReducer);
  const {user} = useSelector(state => state.userReducer)
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
  const infoMP= {
    products,
    currentUserOrder
  }
  console.log("que hay en infoMP", infoMP);
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
      dispatch(mercadoPagoHandler(products));
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
      <h1>Order </h1>

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
                {/* {currentOrder.isDelivered ? ( 
                   <MessageBox variant='success'>
                    Delivered at {currentOrder.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant='danger'>Not Delivered </MessageBox>
                )} */}
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
              {/* <li>
                <div className='row'>
                  <div>Shipping</div>
                  <div>${currentUserOrder.shippingPrice.toFixed(2)}</div>
                </div>
              </li> */}
              {/* <li>
                <div className='row'>
                  <div>tax</div>
                  <div>${currentUserOrder.taxPrice.toFixed(2)}</div>
                </div>
              </li> */}
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
                    // <LoadingBox></LoadingBox>
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
      </div>
    </div>
  );
}
