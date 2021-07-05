import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        [theme.breakpoints.up('sm')]:{
            width: `calc(100% - ${240}px)`,
            marginRight: 240
        }
    }
}))

export const NavBar = (props) => {
    const classes = useStyles()
    return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="secondary" className={classes.grow}>
                        Healthier
                    </Typography>
                    <IconButton color='inherit' aria-label="menu-button" className={classes.menuButton} onClick={()=>props.actionMenuButton()}>
                        <MenuIcon color="secondary"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
    )
}

export default NavBar