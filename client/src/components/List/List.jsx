import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha'
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
                        <AddShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary = 'Ver Carrito' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SortByAlphaIcon />
                    </ListItemIcon>
                    <ListItemText primary = 'Ordenar' />
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
