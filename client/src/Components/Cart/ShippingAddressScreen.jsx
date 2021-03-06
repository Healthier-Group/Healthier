import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveShippingAddress } from "../../redux/cart/cartActions";


export default function ShippingAddressScreen(props) {
 
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  
  
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode })
    );
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
