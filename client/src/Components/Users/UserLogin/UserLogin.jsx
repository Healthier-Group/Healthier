import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Button, TextField, Paper } from "@material-ui/core";
import { Email, VpnKey } from "@material-ui/icons";
import {
  loginUser,
  fetchAuthUser,
  sendEmail,
} from "../../../redux/users/userActions";

import { API_URL } from "../../../utils/Constants";
import swal from "sweetalert";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import { addOrderProduct } from "../../../redux/orderProducts/orderProductActions";

export default function UserLogin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentUser } = useSelector((state) => state.userReducer);
   
  const orderId = currentUser?.order?.id;

  const [input, setInput] = useState({
    email: "",
    password: "",
  });


  useEffect(
    () => {
      if (currentUser) {
        if (currentUser.isAdmin) {
          dispatch(sendEmail(currentUser.email, "verifyadmin"));
          swal(
            "Hemos enviado un link a tu correo para que verifiques tu identidad",
            "Disculpa las molestias",
            "success"
          );
        }else{
           addCartToLS()
        }
        history.push("/");
        
      }
    },
    // eslint-disable-next-line
    [currentUser]
  );

  const handleInputChange = async (e) => {
    await setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  const handleLogIn = async (e) => {
    
    await dispatch(loginUser(input));
    
      //console.log("existis?", currentUser)
      
  };

  const addCartToLS = async ()=>{
 
    let carritoLS = await JSON.parse(localStorage.getItem("cartItems"))
    console.log("carrito del LS", carritoLS)
    if (currentUser) {
      console.log("hay CU", currentUser);
      if (carritoLS?.length) {
        console.log("hay carrito?", carritoLS);
        await carritoLS.map((e) => {
         return dispatch(addOrderProduct({
          productId: e.product,
          orderId: orderId
        })
        )
      })
      }else{
        console.log("aca no llego nada");
      }
      
      await localStorage.removeItem("cartItems");
    }
  }


  const GoogleSSOHandler = async () => {
    let timer = null;
    const newWindow = window.open(
      `${API_URL}auth/login/google`,
      "_blank",
      "width=500,height=600"
    );
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          dispatch(fetchAuthUser());
          if (timer) clearInterval(timer);

        }
      }, 500);
    }
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
          elevation={3}
          style={{
            width: "60vw",
            height: "fit-content",
            padding: "50px",
            margin: "50px auto",
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "20px auto",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                display: "flex",
                minWidth: "240px",
                justifyContent: "center",
              }}
            >
              Inicia sesión
            </h1>
          </div>
          <form noValidate autoComplete="off">
            <TextField
              style={{ display: "flex", margin: "auto" }}
              helperText="Ingrese su Email"
              id="email"
              label={<Email />}
              name="email"
              value={input.email}
              onChange={handleInputChange}
            />
            <br />

            <TextField
              style={{ display: "flex", margin: "auto", textAlign: "center" }}
              helperText="Ingrese su Contraseña"
              id="password"
              label={<VpnKey />}
              name="password"
              type="password"
              value={input.password}
              onChange={handleInputChange}
            />
            <br />
            <Button
              style={{ display: "flex", margin: "auto" }}
              color="secondary"
              onClick={handleLogIn}
              variant="contained"
            >
              Entrar
            </Button>
            <br />
            <Link
              to="/verify/password"
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
                color: "black",
              }}
            >
              <span>Recuperar Contraseña</span>
            </Link>

            <br />
            <div
              style={{
                display: "flex",
                margin: "20px auto",
                justifyContent: "center",
              }}
            >
              <GoogleButton
                style={{
                  display: "flex",
                  minWidth: "240px",
                  justifyContent: "center",
                }}
                type="light"
                label="Ingresar con Google"
                onClick={GoogleSSOHandler}
              />
            </div>
          </form>
        </Paper>
      </div>
      <Footer />
    </div>
  );
}
