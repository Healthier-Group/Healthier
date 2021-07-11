import React from 'react'
import {Box, Grid} from '@material-ui/core'

export default function BoxApp(){
    return(
        <Grid container>
            <Grid item xs = {12} sm = {6} md = {4}>
                <Box border = {1} borderColor = 'error.main' margin = {2}>
                    Contenido1!
                </Box>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {4}>
                <Box border = {1} borderColor = 'error.main' margin = {2}>
                    Contenido2!
                </Box>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {4}>
                <Box border = {1} borderColor = 'error.main' margin = {2}>
                    Contenido3!
                </Box>
            </Grid>
        </Grid>
    )
}