import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Hidden,
  Drawer,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../../Images/h.png";
import List from "../List/List";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

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
    marginRight: "2%",
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

  function openAction() {
    setOpenApp(!openApp);
  }
  return (
    <div>
      <Hidden only={["xs", "sm"]}>
        <AppBar position="fixed">
          <Toolbar style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img src={Logo} className={classes.image} />

              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  margin: "auto",
                }}
              >
                <Hidden>
                  <Typography variant="h6" className={classes.title}>
                    Healthier Club
                  </Typography>
                </Hidden>
              </Link>
            </div>

            <Toolbar>
              <SearchBar />
            </Toolbar>

            <Toolbar>
              <Hidden>
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
                <AddShoppingCartIcon  />
              </Link>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </Hidden>

      {/*Mobile Screen  */}

      <Hidden only={["md", "lg", "xl"]}>
        <AppBar position="static">
          <Toolbar style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Hidden only={["xs", "sm"]}>
                <img src={Logo} className={classes.image} />
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
                <AddShoppingCartIcon />
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
