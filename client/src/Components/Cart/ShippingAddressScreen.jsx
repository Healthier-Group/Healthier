import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../redux/cart/cartActions";
import { updateOrder } from "../../redux/order/orderActions";


export default function ShippingAddressScreen(props) {
 
  // const cart = useSelector((state) => state.cart);
  // const { shippingAddress } = cart;
  const {currentUser} = useSelector(state => state.userReducer);
  const orderId = currentUser?.order?.id;
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  // const [fullName, setFullName] = useState(shippingAddress.fullName);
  // const [address, setAddress] = useState(shippingAddress.address);
  // const [city, setCity] = useState(shippingAddress.city);
  // const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const order={
    fullName:fullName,
    address:address,
    city:city,
    postalCode:postalCode,    
  }
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(
    //   saveShippingAddress({ fullName, address, city, postalCode })
    // );
    dispatch(updateOrder(order, orderId))
    
    props.history.push("/payment");
    
  };

  return (
    <div>
      
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Dirección de Envío</h1>
        </div>
        <div>
          <label htmlFor='fullName'>Nombre completo</label>
          <input
            type='text'
            id='fullName'
            placeholder='Nombre completo'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor='address'>Dirección de envío</label>
          <input
            type='text'
            id='address'
            placeholder='Ingresa la direccion'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor='city'>Ciudad</label>
          <input
            type='text'
            id='city'
            placeholder='Ingresa la ciudad'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor='postalCode'>Código postal</label>
          <input
            type='text'
            id='postalCode'
            placeholder='Ingresa el código postal'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        
        <div>
          <label />
          <button className='primary' type='submit'>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
