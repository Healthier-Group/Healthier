import React from 'react'
import Hierbas from '../../Images/hierbas.jpg'
import {makeStyles} from '@material-ui/core'
import Footer from '../Footer/Footer'

const style = makeStyles(theme => ({
    view:{
        margin: '10%',
        display: 'flex',
        justifyContent: 'center'
    },
    imageView:{
        display: 'block',
        margin: 'auto',
        marginBottom: '30%'
    }
}))

export default function Recipes(){
    const classes = style()
    return(
        <div style = {{minHeight: '100vh', position: 'relative'}}>
            <div className = {classes.view}>
                Acá deberían de ir las recetas!!!
            </div>
            <img src = {Hierbas} width = '400px' height = '300px' className = {classes.imageView}/>
            <Footer />
        </div>

    )
}