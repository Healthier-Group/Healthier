import React from 'react'
import {makeStyles, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core'
import {SearchIcon, StoreIcon, ShoppingCartIcon, MonetizationOnIcon, TurnedInIcon, ListAltIcon, InfoIcon} from '@material-ui/icons'
const styles = makeStyles({

})

export const Drawer = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                    <InputBase placeholder='Búsqueda' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StoreIcon/>
                    </ListItemIcon>
                    <InputBase placeholder='Productos' />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ShoppingCartIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Mi Carrito'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MonetizationOnIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Mis Compras'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <TurnedInIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Mis Favoritos'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ListAltIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Recetas'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Nosotros'/>
                </ListItem>
            </List>
        </div>
    )
}
