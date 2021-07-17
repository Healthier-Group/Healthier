import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { savePaymentMethod } from "../../redux/cart/cartActions";


export default function PaymentMethodScreen(props) {
    // const cart = useSelector(state => state.cart)
    // const {shippingAddress}=cart
    // if(!shippingAddress.adress){
    //     props.history.push('/shipping')
    // }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
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
              value='PayPal'
              name='paymentMethod'
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor='paypal'>PayPal</label>
          </div>
          <div>
            <div>
              <input
                type='radio'
                id='stripe'
                value='Stripe'
                name='paymentMethod'
                required
               
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor='stripe'>Mercado</label>
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
