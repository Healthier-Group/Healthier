import React from 'react'
import NavBar from './NavBar'
import DrawerBox from './DrawerBox'

import {makeStyles, Hidden} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}))

export const Navigation = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const actionMenuButton = () => {
        setOpen(!open)
    }
    return (
        <div className={classes.root}>
            <NavBar actionMenuButton={actionMenuButton}/>
            <Hidden xsDown>
                <DrawerBox variant="permanent" open={true}/>
            </Hidden>
            <Hidden smUp>
                <DrawerBox variant="temporary" open={open} onClose={actionMenuButton}/>
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}/>
            </div>
        </div>
    )
}

export default Navigation