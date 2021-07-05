import React from 'react'
import {makeStyles, Drawer} from '@material-ui/core'
import DrawerList from './DrawerList'

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: 240
    }
}))

export const DrawerBox = (props) => {
    const classes = useStyles()
    return (
        <div>
            <Drawer 
                classes= {{
                    paper: classes.drawerPaper
                }} 
                anchor='right'
                variant={props.variant} 
                open={props.open} 
                onClose={props.onClose ? props.onClose : null}
            >
                <div className={classes.toolbar}/>
                <DrawerList/>
            </Drawer>
        </div>
    )
}

export default DrawerBox
