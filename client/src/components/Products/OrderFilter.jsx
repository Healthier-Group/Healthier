import React from 'react'
import { orderAZ, orderZA, priceHigh, priceLower } from '../../redux/products/productActions'
import {useDispatch, useSelector} from 'react-redux'

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

    return (
        <div>
            <span onClick={(e)=> orderAsc(e)} style={{cursor:'pointer'}}>
                orderAZ
            </span>
            <button onClick={(e)=> orderDesc(e)}>
                orderZA
            </button>
            <button onClick={(e)=> orderLow(e)}>
                CHEAP
            </button>
            <button onClick={(e)=> orderHigh(e)}>
                EXPENSIVE
            </button>
        </div>
    )
}

export default OrderFilter
