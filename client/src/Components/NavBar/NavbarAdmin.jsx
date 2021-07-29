import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Logo from "../../Images/h.png";

import { logOutUser } from "../../redux/users/userActions";
import swal from "sweetalert";

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
  },
  drawerPaper: {
    width: 240,
  },

  center: {
    // margin: "auto",
    justifyContent: "space-between",
  },
  toolbar: theme.mixins.toolbar,
}));

export default function NavBar() {
  const classes = useStyles();
  const [openApp, setOpenApp] = useState(false);
  const dispatch = useDispatch();

  // eslint-disable-next-line
  function openAction() {
    setOpenApp(!openApp);
  }

  const handleLogOut = () => {
    dispatch(logOutUser());
    swal("Cerró su sesión", "Vuelva pronto", "success").then(() => {
      window.location.href = "/";
    });
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

            {/* <Toolbar style={{ margin: "auto" }}>
              <SearchBar />
            </Toolbar> */}
          </Toolbar>
          <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <Toolbar>
              <Link to="/private/userlist" className={classes.buttons}>
                <span style={{ margin: "0 10px" }} color="secondary">
                  Usuarios
                </span>
              </Link>
              <Link to="/private/productlist" className={classes.buttons}>
                <span style={{ margin: "0 10px" }} color="secondary">
                  Productos
                </span>
              </Link>
              <Link to="/private/categorylist" className={classes.buttons}>
                <span style={{ margin: "0 10px" }} color="secondary">
                  Categorias
                </span>
              </Link>
            </Toolbar>
            {!JSON.parse(localStorage.getItem("profile")) ? (
              <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to="/register" className={classes.buttons}>
                  <span style={{ margin: "0 10px" }} color="secondary">
                    Register
                  </span>
                </Link>
                <Link to="/login" className={classes.buttons}>
                  <span style={{ margin: "0 10px" }} color="secondary">
                    Login
                  </span>
                </Link>
              </Toolbar>
            ) : (
              <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to="/" className={classes.buttons}>
                  <span onClick={handleLogOut} color="secondary">
                    Log Out
                  </span>
                </Link>
              </Toolbar>
            )}
          </Toolbar>
        </AppBar>
      </Hidden>
    </div>
  );
}
