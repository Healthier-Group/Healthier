import React from 'react'
import {makeStyles} from "@material-ui/core"
import { orderAZ, orderZA, priceHigh, priceLower } from '../../redux/products/productActions'
import {useDispatch, useSelector} from 'react-redux'

const style = makeStyles((theme) => ({
    view:{
        display: 'flex',
        flexDirection: 'column'
    },
    spans:{
        margin:'10%',
        cursor: 'pointer'
    }
}))

const OrderFilter = () => {
    const dispatch = useDispatch()

function orderAsc(e){
    e.preventDefault()
    dispatch(orderAZ())
}
function orderDesc(e){
    e.preventDefault()
    dispatch(orderZA())
}
function orderLow(e){
    e.preventDefault()
    dispatch(priceLower())
}
function orderHigh(e){
    e.preventDefault()
    dispatch(priceHigh())
}

const classes = style()
    return (
        <div className = {classes.view}>
            <span onClick={(e)=> orderAsc(e)} className = {classes.spans}>
                Ordenar <span style = {{color: '#999'}}>(A - Z)</span>
            </span>
            <span onClick={(e)=> orderDesc(e)} className = {classes.spans}>
                Ordenar <span style = {{color: '#999'}}>(Z - A)</span>
            </span>
            <span onClick={(e)=> orderLow(e)} className = {classes.spans}>
                Lo más barato
            </span>
            <span onClick={(e)=> orderHigh(e)} className = {classes.spans}>
                Lo más caro
            </span>
        </div>
    )
}

export default OrderFilter
