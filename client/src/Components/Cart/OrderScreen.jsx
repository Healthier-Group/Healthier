import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../../redux/order/orderActions";
// // import LoadingBox from "../Components/LoadingBox";
 import MessageBox from "../Cart/MessageBox";

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();
  const orderReducer = useSelector((state) => state.orderReducer);
  console.log(orderReducer);
  const { currentOrder } = orderReducer;
  console.log(currentOrder);
  useEffect(() => {
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
    // if (!order) {
    //   dispatch(createOrder(orderId));
    // } else {
    //   if (!order.isPaid) {
    //     if (!window.paypal) {
    //       addPayPalScript();
    //     } else {
    //       setSdkReady(true);
    //     }
    //   }
    // }
  }, [dispatch, orderId, sdkReady]);

  //   const successPaymentHnadler = () => {
  //     // TODO: dispatch pay order
  //   };

  return (
    <div>
      <h1>Order </h1>
    
      <div className='row top'>
        <div className='col-2'>
          <ul>
            <li>
              <div className='card card-body'>
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {currentOrder.shippingAddress.fullName}
                  <br />
                  <strong>Address:</strong> {currentOrder.shippingAddress.address},
                  {currentOrder.shippingAddress.city},
                  {currentOrder.shippingAddress.postalCode},
                  {currentOrder.shippingAddress.country},
                </p>
                {currentOrder.isDelivered ? (
                  <MessageBox variant='success'>
                    Delivered at {currentOrder.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant='danger'>Not Delivered </MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className='card card-body'>
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {currentOrder.paymentMethod}
                </p>
                {currentOrder.isPaid ? (
                  <MessageBox variant='success'>
                    Paid at {currentOrder.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant='danger'>Not Paid </MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className='card card-body'>
                <h2>Order Items</h2>
                <ul>
                  {currentOrder.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className='row'>
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className='small'
                          />
                        </div>
                        <div className='min-30'>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
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
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className='row'>
                  <div>Items</div>
                  <div>${currentOrder.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Shipping</div>
                  <div>${currentOrder.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>tax</div>
                  <div>${currentOrder.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>
                    <strong>Order Total</strong>
                  </div>
                  <div>
                    <strong>${currentOrder.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              {!currentOrder.isPaid && (
                <li>
                  {!sdkReady ? (
                    <h4>todo mal</h4>
                    // <LoadingBox></LoadingBox>
                  ) : (
                    <PayPalButton
                      amount={currentOrder.totalPrice}
                      // onSuccess={successPaymentHnadler}
                    ></PayPalButton>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      </div>
  );
}