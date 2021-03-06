import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {
  Container,
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
import {logOutUser} from '../../redux/users/userActions'

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
  const dispatch = useDispatch();

  function openAction() {
    setOpenApp(!openApp);
  }

  const handleLogOut = () => {
    dispatch(logOutUser())
  }

  return (
    <div>
      <Hidden only={["xs", "sm"]}>
        <AppBar position="fixed">
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img src={Logo} alt="Not found"className={classes.image} />

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
                <AddShoppingCartIcon />
              </Link>
              <Container>
                {
                  !   JSON.parse(localStorage.getItem('profile'))
                  ? (<Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
                      <Link to="/register"><Button color="secondary">Register</Button></Link>
                      <Link to="/login"><Button color="secondary">Login</Button></Link>
                    </Toolbar>)
                  : (<Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
                      <Link to="/"><Button onClick={handleLogOut} color="secondary">Log Out</Button></Link>
                    </Toolbar>)
                }
              </Container>
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
