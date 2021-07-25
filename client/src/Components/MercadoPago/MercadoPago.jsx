import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function MercadoPago(){
    const[link, setLink] = useState('')
    function pay(){
       return  axios.post('http://localhost:3001/mercadopago')
                    .then(r => {
                        setLink(r.data.link)
                    })
    }
    useEffect(() => {
        pay()
    },[]) 
    return(
        <div>
            <button>
                <a href = {link}>Pagar con MercadoPago</a>
            </button>
            
        </div>
    )
}
