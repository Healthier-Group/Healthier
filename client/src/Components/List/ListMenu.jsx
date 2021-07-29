import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import StoreIcon from "@material-ui/icons/Store";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PlaceIcon from "@material-ui/icons/Place";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Fingerprint, Person } from "@material-ui/icons";
import { logOutUser } from "../../redux/users/userActions";
import {useDispatch} from 'react-redux'

export default function ListMenu() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
    swal("Cerró su sesión", "Vuelva pronto", "success").then(() => {
      window.location.href = "/";
    });
  };

  return (
    <>
      <List>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemIcon>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Mi Carrito" />
          </ListItem>
        </Link>

        <ListItem>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Mis Compras" />
        </ListItem>

        <Link to="/wishlist" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemIcon>
              <TurnedInNotIcon />
            </ListItemIcon>
            <ListItemText primary="Mis Favoritos" />
          </ListItem>
        </Link>

        <Link to="/recipes" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Mis Recetas" />
          </ListItem>
        </Link>

        {!JSON.parse(localStorage.getItem("profile")) ? (
          <div>
            <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
              <ListItem>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItem>
            </Link>

            <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
              <ListItem>
                <ListItemIcon>
                  <Fingerprint />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItem>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/" onClick={handleLogOut} style={{ textDecoration: "none", color: "black" }}>
              <ListItem>
                <ListItemIcon>
                  <Fingerprint />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Link>
          </div>
        )}

        <ListItem>
          <ListItemIcon>
            <PlaceIcon />
          </ListItemIcon>
          <ListItemText primary="Donde Estamos" />
        </ListItem>
        <Divider />
      </List>
    </>
  );
}
