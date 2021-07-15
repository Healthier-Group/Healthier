import React from 'react'
import {List, ListItem, ListItemIcon, ListItemText, InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import ListAltIcon from '@material-ui/icons/ListAlt';
import InfoIcon from '@material-ui/icons/Info';

export const DrawerList = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                    <InputBase placeholder='Búsqueda' />
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon>
                        <StoreIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Productos' />
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

export default DrawerList