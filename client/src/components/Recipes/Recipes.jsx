import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hierbas from '../../Images/hierbas.jpg'
import {makeStyles} from '@material-ui/core'

const style = makeStyles(theme => ({
    view:{
        margin: '10%',
        display: 'flex',
        justifyContent: 'center'
    },
    imageView:{
        display: 'block',
        margin: 'auto'
    }
}))

export default function Recipes(){
    const classes = style()
    return(
        <>
            <NavBar /> 
            <div className = {classes.view}>
                Acá deberían de ir las recetas!!!
            </div>
            <img src = {Hierbas} width = '400px' height = '300px' className = {classes.imageView}/>
        </>

    )
}