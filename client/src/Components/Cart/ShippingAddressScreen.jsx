import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveShippingAddress } from "../../redux/cart/cartActions";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Button, Paper, TextField } from "@material-ui/core";
import { AddLocation, Home, LocationCity, Person } from "@material-ui/icons";

export default function ShippingAddressScreen(props) {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ fullName, address, city, postalCode }));
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
