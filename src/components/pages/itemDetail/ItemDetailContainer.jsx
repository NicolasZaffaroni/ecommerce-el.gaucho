import React, { useEffect, useState } from 'react'
import ItemDetail from './itemDetail'
import { useParams } from 'react-router-dom'
import { products } from '../../productsMock'

const ItemDetailContainer = () => {

    const [producto,setProducto] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        let productosSeleccionado = products.find((elemento)=> elemento.id=== +id)
        const tarea = new Promise((respuesta, rej)=>{
            respuesta(productosSeleccionado)
        });
        tarea.then(respuesta => setProducto(respuesta))
    },[id]);





    return (

    <ItemDetail producto={producto} />
    )
    
}

export default ItemDetailContainer