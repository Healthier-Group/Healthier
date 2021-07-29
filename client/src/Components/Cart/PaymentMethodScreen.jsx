import { Button, Divider, Grid, Hidden, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../redux/order/orderActions";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function PaymentMethodScreen(props) {
  // const cart = useSelector(state => state.cart)
  // const {shippingAddress}=cart
  // if(!shippingAddress.adress){
  //     props.history.push('/shipping')
  // }
  const [payment, setPayment] = useState("Mercado Pago");
  const { currentUser } = useSelector((state) => state.userReducer);
  const orderId = currentUser?.order?.id;
  const dispatch = useDispatch();
  const order = {
    paymentMethod: payment,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(savePaymentMethod(paymentMethod))
    dispatch(updateOrder(order, orderId));
    props.history.push("/placeorder");
  };

  return (
    <div>
      {/* <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Metodos de Pago</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="mercado pago"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPayment(e.target.value)}
            />
            <label htmlFor="mercado pago">Mercado Pago</label>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="paypal"
                value="paypal"
                name="paymentMethod"
                required
                onChange={(e) => setPayment(e.target.value)}
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <div>
              <button className="primary" type="submit">
                Continue
              </button>
            </div>
          </div>
        </div>
      </form> */}

      <div style={{ minHeight: "100vh" }}>
        <NavBar/>
        <Hidden only={["xs", "sm"]}>
        <Paper
          style={{
            margin: "auto",
            width: "60vw",
            marginTop: "10vh",
            padding: "50px",
          }}
        >
          <form className="form" onSubmit={submitHandler}>
            <Typography variant="h3">Metodos de pago</Typography>
            <br />
            <Grid
              container
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Grid item style={{ display: "flex", flexDirection: "column" }}>
                <img
                  src="https://ucarecdn.com/c107e970-b230-402f-b015-301bdd06ef60/"
                  alt="Not found"
                  width="200px"
                  height="90px"
                  style={{ margin: "auto" }}
                />
                <br />
                <input
                  type="radio"
                  id="paypal"
                  value="mercado pago"
                  name="paymentMethod"
                  required
                  checked
                  onChange={(e) => setPayment(e.target.value)}
                  style={{ margin: "auto" }}
                />
              </Grid>
              <Grid item style={{ display: "flex", flexDirection: "column" }}>
                <img
                  src="https://comunidadblogger.net/wp-content/uploads/2020/12/paypal.jpg"
                  alt="Not found"
                  width="150px"
                  height="90px"
                  style={{ margin: "auto" }}
                />
                <br />
                <input
                  type="radio"
                  id="paypal"
                  value="paypal"
                  name="paymentMethod"
                  required
                  onChange={(e) => setPayment(e.target.value)}
                  style={{ margin: "auto" }}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              style={{ position: "relative", left: "40vw" }}
            >
              Continue
            </Button>
          </form>
        </Paper>
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
        <Paper
          style={{
            margin: "auto",
            width: "60vw",
            marginTop: "10vh",
            marginBottom: "10vh",
            padding: "50px",
          }}
        >
          <form className="form" onSubmit={submitHandler}>
            <Typography variant="h3">Metodos de pago</Typography>
            <br />
            <Grid
              container
              style={{ marginTop:"10vh",display: "flex", flexDirection:"column", justifyContent: "space-evenly" }}
            >
              <Grid item style={{ display: "flex", flexDirection: "column" }}>
                <img
                  src="https://ucarecdn.com/c107e970-b230-402f-b015-301bdd06ef60/"
                  alt="Not found"
                  width="200px"
                  height="90px"
                  style={{ margin: "auto" }}
                />
                <br />
                <input
                  type="radio"
                  id="paypal"
                  value="mercado pago"
                  name="paymentMethod"
                  required
                  checked
                  onChange={(e) => setPayment(e.target.value)}
                  style={{ margin: "auto" }}
                />
              </Grid>
              <Grid item style={{ display: "flex", flexDirection: "column" }}>
                <img
                  src="https://comunidadblogger.net/wp-content/uploads/2020/12/paypal.jpg"
                  alt="Not found"
                  width="150px"
                  height="90px"
                  style={{ margin: "auto" }}
                />
                <br />
                <input
                  type="radio"
                  id="paypal"
                  value="paypal"
                  name="paymentMethod"
                  required
                  onChange={(e) => setPayment(e.target.value)}
                  style={{ margin: "auto" }}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              style={{ position: "relative", left: "30vw" }}
            >
              Continue
            </Button>
          </form>
        </Paper>
        </Hidden>
      </div>
      <Footer/>
    </div>
  );
}
