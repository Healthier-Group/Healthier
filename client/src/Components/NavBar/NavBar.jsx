import React, {useState} from "react"
import{
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Hidden,
  Drawer,
  Divider
} from "@material-ui/core"
import {Link} from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import SearchBar from "../SearchBar/SearchBar"
import Logo from "../../Images/h.png"
import List from "../List/List"

const useStyles = makeStyles((theme) => ({
  menuButton:{
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]:{display: "none"},
  },
  title:{
    fontFamily: "Merienda One",
    marginTop: '2%'
  },
  image:{
    float: 'left',
    borderRadius: "50%",
    marginRight: '3%',
    maxWidth: '13%',
    // maxWidth: "50px",
    // marginTop: '2%'
  },
  buttons:{
    textDecoration: "none",
    marginRight: "2%",
  },
  drawer:{
    width: 240,
    flexShrink: 0,
  },
  drawerPaper:{
    width: 240,
  },
  center:{
    margin: 'auto'
  },
  toolbar: theme.mixins.toolbar,
}))

export default function NavBar(){
  const classes = useStyles()

  const[openApp, setOpenApp] = useState(false)

  function openAction(){
    setOpenApp(!openApp)
  }
  return(
    <div>
      <AppBar>
        <Toolbar>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style = {{textDecoration: 'none', color: 'inherit'}}>
              <img src={Logo} className={classes.image} />
                Healthier Club
              </Link>
            </Typography>
          </Toolbar>

          <Hidden only={"xs"}>
            <Toolbar className = {classes.center}>
              <SearchBar />
            </Toolbar>
          </Hidden>

          <Toolbar className = {classes.center}>
            <Link to="/products" className={classes.buttons}>
              <Button color="secondary">Productos</Button>
            </Link>
            <Link to="/recipes" className={classes.buttons}>
              <Button color="secondary">Recetas</Button>
            </Link>
            <Hidden only={["sm", "md", "lg", "xl"]}>
              <IconButton color="secondary" onClick={openAction}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Drawer
              className={classes.drawer}
              classes={{ paper: classes.drawerPaper }}
              anchor="right"
              open={openApp}
              onClose={openAction}
            >
              <div className={classes.toolbar}/>
                <Divider />
                <List />
            </Drawer>
          </Toolbar>

        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}/>
    </div>
  )
}