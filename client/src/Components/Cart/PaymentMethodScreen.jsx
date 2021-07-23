import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { savePaymentMethod } from "../../redux/cart/cartActions";
import { updateOrder } from "../../redux/order/orderActions";


export default function PaymentMethodScreen(props) {
  // const cart = useSelector(state => state.cart)
  // const {shippingAddress}=cart
  // if(!shippingAddress.adress){
  //     props.history.push('/shipping')
  // }
  const [payment, setPayment] = useState("");
  const {currentUser} = useSelector(state => state.userReducer);
  const orderId = currentUser?.order?.id;
  const dispatch = useDispatch();
  const order = {
    paymentMethod: payment
  }
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(savePaymentMethod(paymentMethod))
    dispatch(updateOrder(order, orderId))
    props.history.push('/placeorder')
    
  };

  return (
    <div>
      
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Metodos de Pago</h1>
        </div>
        <div>
          <div>
            <input
              type='radio'
              id='paypal'
              value='mercado pago'
              name='paymentMethod'
              required
              checked
              onChange={(e) => setPayment(e.target.value)}
            />
            <label htmlFor='mercado pago'>Mercado Pago</label>
          </div>
          <div>
            <div>
              <input
                type='radio'
                id='paypal'
                value='paypal'
                name='paymentMethod'
                required
               
                onChange={(e) => setPayment(e.target.value)}
              />
              <label htmlFor='paypal'>PayPal</label>
            </div>
            <div>
              <button className='primary' type='submit'>
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
