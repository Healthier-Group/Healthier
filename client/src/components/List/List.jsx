import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import StoreIcon from '@material-ui/icons/Store'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PlaceIcon from '@material-ui/icons/Place'

export default function list(){
    return(
        <>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary = 'Buscar...' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StoreIcon />
                    </ListItemIcon>
                    <ListItemText primary = 'Productos' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AddShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary = 'Mi Carrito' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MonetizationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary = 'Mis Compras' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <TurnedInNotIcon />
                    </ListItemIcon>
                    <ListItemText primary = 'Mis Favoritos' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary = 'Mis Recetas' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PlaceIcon />
                    </ListItemIcon>
                    <ListItemText primary = 'Donde Estamos' />
                </ListItem>
                <Divider />
            </List>
        </>
    )
}
