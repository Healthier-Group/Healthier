import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Hidden,
  Drawer,
  Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../../Images/h.png";
import List from "../List/ListMenu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { logOutUser } from "../../redux/users/userActions";
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: { display: "none" },
  },
  title: {
    fontFamily: "Merienda One",
    minWidth: "150px",
  },
  image: {
    borderRadius: "50%",
    marginRight: "20px",
    width: "50px",
    height: "50px",
  },
  buttons: {
    textDecoration: "none",
    color: "white",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    backgroundColor: "red"
  },
  drawerPaper: {
    width: 240,
    backgroundColor: "blue"
  },

  center: {
    // margin: "auto",
    justifyContent: "space-between",
  },
  toolbar:theme.mixins.toolbar
}));

export default function NavBar() {
  const classes = useStyles();
  const [openApp, setOpenApp] = useState(false);
  const dispatch = useDispatch();

  function openAction() {
    setOpenApp(!openApp);
  }

  const handleLogOut = () => {
    dispatch(logOutUser());
    swal("Cerró su sesión", "Vuelva pronto", "success")
    .then(()=>{
      window.location.href = "/"
    })
  };

  return (
    <div>
      <Hidden only={["xs", "sm"]}>
        <AppBar position="static">
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img src={Logo} alt="Not found" className={classes.image} />

              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  margin: "auto",
                }}
              >
                <Typography variant="h6" className={classes.title}>
                  Healthier Club
                </Typography>
              </Link>
            </div>

            <Toolbar style={{ margin: "auto" }}>
              <SearchBar />
            </Toolbar>
          </Toolbar>
          <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <Toolbar>
              <Link to="/recipes" className={classes.buttons}>
                <span style={{ margin: "0 10px" }} color="secondary">
                  Recetas
                </span>
              </Link>
              <Link to="/wishlist" className={classes.buttons}>
                <span style={{ margin: "0 10px" }} color="secondary">
                  <FavoriteIcon/>
                </span>
              </Link>

              <Link to="/cart" className={classes.buttons}>
                <span style={{ margin: "0 10px" }}>
                  <ShoppingCartIcon />
                </span>
              </Link>
            </Toolbar>
            {!JSON.parse(localStorage.getItem("profile")) ? (
              <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to="/register" className={classes.buttons}>
                  <span style={{ margin: "0 10px" }} color="secondary">
                    Registrarse
                  </span>
                </Link>
                <Link to="/login" className={classes.buttons}>
                  <span style={{ margin: "0 10px" }} color="secondary">
                    Iniciar sesión
                  </span>
                </Link>
              </Toolbar>
            ) : (
              <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to="/" className={classes.buttons}>
                  <span onClick={handleLogOut} color="secondary">
                    Cerrar sesión
                  </span>
                </Link>
              </Toolbar>
            )}
          </Toolbar>
        </AppBar>
      </Hidden>

      {/*Mobile Screen  */}

      <Hidden only={["md", "lg", "xl"]}>
        <AppBar position="static">
          <Toolbar style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Hidden only={["xs", "sm"]}>
                <img src={Logo} alt="Not found" className={classes.image} />
              </Hidden>

              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  margin: "auto",
                }}
              >
                <Hidden only={["xs", "sm"]}>
                  <Typography variant="h6" className={classes.title}>
                    Healthier Club
                  </Typography>
                </Hidden>
              </Link>
            </div>

            <IconButton color="secondary" onClick={openAction}>
              <MenuIcon />
            </IconButton>

            <Toolbar>
              <SearchBar />
            </Toolbar>

            <Toolbar>
              <Hidden only={["xs", "sm"]}>
                <Link to="/products" className={classes.buttons}>
                  <Button color="secondary">Productos</Button>
                </Link>
                <Link to="/recipes" className={classes.buttons}>
                  <Button color="secondary">Recetas</Button>
                </Link>
              </Hidden>
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ShoppingCartIcon />
              </Link>
            </Toolbar>

            <Drawer
              className={classes.drawer}
              classes={{ paper: classes.drawerPaper }}
              anchor="left"
              open={openApp}
              onClose={openAction}
            >
              <div className={classes.toolbar} />
              <Divider />
              <List />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Hidden>
    </div>
  );
}
