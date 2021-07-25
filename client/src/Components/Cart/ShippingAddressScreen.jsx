import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../redux/cart/cartActions";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Button, Paper, TextField } from "@material-ui/core";
import { AddLocation, Home, LocationCity, Person } from "@material-ui/icons";

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
      <NavBar />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          style={{
            width: "60vw",
            height: "fit-content",
            padding: "30px",
          }}
        >
          <form className="form" onSubmit={submitHandler}>
            <h1 style={{ textAlign: "center" }}>Dirección de envío</h1>

            <br />
            <TextField
              style={{ padding: "2px", display: "flex", margin: " auto" }}
              type="text"
              id="fullName"
              label={<Person />}
              helperText="Nombre completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <br />
            <TextField
              style={{ padding: "2px", display: "flex", margin: " auto" }}
              type="text"
              id="address"
              label={<Home />}
              helperText="Ingresa la direccion"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <br />
            <TextField
              style={{ padding: "2px", display: "flex", margin: " auto" }}
              type="text"
              id="city"
              label={<LocationCity />}
              helperText="Ingresa la ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <br />
            <TextField
              style={{ padding: "2px", display: "flex", margin: "auto" }}
              type="text"
              id="postalCode"
              label={<AddLocation />}
              helperText="Ingresa el código postal"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              style={{ display: "flex", margin: "auto", marginTop: "30px" }}
            >
              Continue
            </Button>
          </form>
        </Paper>
      </div>
      <Footer />
    </div>
  );
}
