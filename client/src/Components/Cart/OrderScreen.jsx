// import axios from "axios";
// import { PayPalButton } from 'react-paypal-button-v2';
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { detailsOrder } from "../../redux/order/orderActions";
// // import LoadingBox from "../Components/LoadingBox";
// // import MessageBox from "../Components/MessageBox";

// export default function OrderScreen(props) {
//   const orderId = props.match.params.id;
//   const [sdkReady, setSdkReady] = useState(false);
//   const dispatch = useDispatch();
//   const orderDetails = useSelector((state) => state.orderDetails);
//   const { loading, order, error } = orderDetails;
//   useEffect(() => {
//     const addPayPalScript = async () => {
//       const { data } = await axios.get("/api/config/paypal");
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
//       script.async = true;
//       script.onload = () => {
//         setSdkReady(true);
//       };
//       document.body.appendChild(script);
//     };
//     if (!order) {
//       dispatch(detailsOrder(orderId));
//     } else {
//       if (!order.isPaid) {
//         if (!window.paypal) {
//           addPayPalScript();
//         } else {
//           setSdkReady(true);
//         }
//       }
//     }
//   }, [dispatch, order, orderId, sdkReady]);

//   const successPaymentHnadler = () => {
//     // TODO: dispatch pay order
//   };

//   return ("test")
// }
//   loading ? (
//     <LoadingBox/>
//   ) : error ? (
//     <MessageBox variant='danger'>{error}</MessageBox>
//   ) : (
//     <div>
//       <h1>Order {order._id}</h1>
//       <div className='row top'>
//         <div className='col-2'>
//           <ul>
//             <li>
//               <div className='card card-body'>
//                 <h2>Shipping</h2>
//                 <p>
//                   <strong>Name:</strong> {order.shippingAddress.fullName}
//                   <br />
//                   <strong>Address:</strong> {order.shippingAddress.address},
//                   {order.shippingAddress.city},
//                   {order.shippingAddress.postalCode},
//                   {order.shippingAddress.country},
//                 </p>
//                 {order.isDelivered ? (
//                   <MessageBox variant='success'>
//                     Delivered at {order.deliveredAt}
//                   </MessageBox>
//                 ) : (
//                   <MessageBox variant='danger'>Not Delivered </MessageBox>
//                 )}
//               </div>
//             </li>
//             <li>
//               <div className='card card-body'>
//                 <h2>Payment</h2>
//                 <p>
//                   <strong>Method:</strong> {order.paymentMethod}
//                 </p>
//                 {order.isPaid ? (
//                   <MessageBox variant='success'>
//                     Paid at {order.paidAt}
//                   </MessageBox>
//                 ) : (
//                   <MessageBox variant='danger'>Not Paid </MessageBox>
//                 )}
//               </div>
//             </li>
//             <li>
//               <div className='card card-body'>
//                 <h2>Order Items</h2>
//                 <ul>
//                   {order.orderItems.map((item) => (
//                     <li key={item.product}>
//                       <div className='row'>
//                         <div>
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className='small'
//                           />
//                         </div>
//                         <div className='min-30'>
//                           <Link to={`/product/${item.product}`}>
//                             {item.name}
//                           </Link>
//                         </div>
//                         <div>
//                           {item.qty}x${item.price} = ${item.qty * item.price}
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div className='col-1'>
//           <div className='card card-body'>
//             <ul>
//               <li>
//                 <h2>Order Summary</h2>
//               </li>
//               <li>
//                 <div className='row'>
//                   <div>Items</div>
//                   <div>${order.itemsPrice.toFixed(2)}</div>
//                 </div>
//               </li>
//               <li>
//                 <div className='row'>
//                   <div>Shipping</div>
//                   <div>${order.shippingPrice.toFixed(2)}</div>
//                 </div>
//               </li>
//               <li>
//                 <div className='row'>
//                   <div>tax</div>
//                   <div>${order.taxPrice.toFixed(2)}</div>
//                 </div>
//               </li>
//               <li>
//                 <div className='row'>
//                   <div>
//                     <strong>Order Total</strong>
//                   </div>
//                   <div>
//                     <strong>${order.totalPrice.toFixed(2)}</strong>
//                   </div>
//                 </div>
//               </li>
//               {!order.isPaid && (
//                 <li>
//                   {!sdkReady ? (
//                     <LoadingBox></LoadingBox>
//                   ) : (
//                     <PayPalButton
//                       amount={order.totalPrice}
//                       onSuccess={successPaymentHnadler}
//                     ></PayPalButton>
//                   )}
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





