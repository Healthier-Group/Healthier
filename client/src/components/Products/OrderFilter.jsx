import React from 'react'
import { orderAZ, orderZA } from '../../redux/products/productActions'
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

    return (
        <div>
            <button onClick={(e)=> orderAsc(e)}>
                orderAZ
            </button>
            <button onClick={(e)=> orderDesc(e)}>
                orderZA
            </button>
        </div>
    )
}

export default OrderFilter
