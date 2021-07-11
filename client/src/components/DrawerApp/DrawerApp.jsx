import React from 'react'
import {makeStyles, Drawer, Divider} from '@material-ui/core'
import List from '../List/List'

const style = makeStyles(theme => ({
    drawer:{
        width: 240,
        flexShrink: 0
    },
    drawerPaper:{
        width: 240
    },
    toolbar: theme.mixins.toolbar
}))


export default function DrawerApp(){
    const classes = style()
    const[openApp, setOpenApp] = React.useState(false)
    const openAction = () => {
        setOpenApp(!openApp)
    }

    return(
            <Drawer className = {classes.drawer}
                    classes = {{paper: classes.drawerPaper}}
                    anchor = 'right'
                    /* variant = {props.variant} */
                    open = {openApp}
                    onClose = {(e) => {openAction(e)}}>
                <div className = {classes.toolbar}></div>
                <Divider />
                <List />
            </Drawer>
     
    )
}