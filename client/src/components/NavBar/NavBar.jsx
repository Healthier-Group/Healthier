import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Hidden} from '@material-ui/core'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import SearchBar from '../SearchBar/SearchBar'
import Logo from '../../Images/h.png'
import DrawerApp from '../DrawerApp/DrawerApp'

const useStyles = makeStyles(theme => ({
    menuButton:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {display: 'none'}
    },
    title:{
        flexGrow: 1,
        fontFamily: 'Merienda One'
    },
    image:{
        borderRadius: '50%',
        width: '5%',
        marginBottom: '-1.5%',
        marginRight: '2%'
    },
    buttons:{
        textDecoration: 'none',
        marginRight: '2%'
    }
}))

export default function NavBar(){
    const classes = useStyles()
    const[openApp, setOpenApp] = useState(true)
    function openAction(){
        setOpenApp(!openApp)
    }
    return(
        <AppBar className = {classes.appBar}>
            <Toolbar>
                <Typography variant = 'h6'  className = {classes.title}>
                    <Link to = '/'>
                        <img src = {Logo} className = {classes.image}/>
                    </Link>
                        Healthier Club
                </Typography>
                <Link to = '/products' className = {classes.buttons}>
                    <Button color = 'secondary'>
                        Productos
                    </Button>
                </Link>
                <Link to = '/recipes' className = {classes.buttons}>
                    <Button color = 'secondary'>
                        Recetas
                    </Button>
                </Link>
                <Hidden only = {['xs', 'sm']}>
                    <SearchBar/>
                </Hidden>
                <Hidden only = {['md', 'lg', 'xl']}>
                    <IconButton color = 'secondary'
                                onClick = {(e) => openAction(e)}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Hidden>
                <DrawerApp variant = 'permanent'
                            open = {true} />
           </Hidden>
           <Hidden>
                <DrawerApp variant = 'permanent'
                            open = {openApp}
                            onClose = {(e) => openAction(e)} />
           </Hidden>
            </Toolbar>
        </AppBar>
    )
}

