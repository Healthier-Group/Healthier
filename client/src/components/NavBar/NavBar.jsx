import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    root:{
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    }
}))

export const NavBar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="secondary" className={classes.grow}>
                        Healthier
                    </Typography>
                    <IconButton onClick={null} aria-label="menu-button">
                        <MenuIcon color="secondary"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}/>
        </div>
    )
}
