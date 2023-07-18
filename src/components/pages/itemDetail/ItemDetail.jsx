import React, { useEffect, useState } from 'react'
import CounterContainer from '../../common/counter/CounterContainer'
import { products } from '../../productsMock'
import { useParams } from 'react-router-dom'



const ItemDetail = () => {

    const [producto,setProducto] = useState({})

    const {id} = useParams

    useEffect(()=>{
        let productosSeleccionado = products.find((elemento)=> elemento.id=== +id)
        const tarea = new Promise((respuesta, rej)=>{
            respuesta(productosSeleccionado)
        });
        tarea.then(respuesta => setProducto(respuesta))
    },[id]);
    


    
    const onAdd = (cantidad) =>{
        console.log(producto)
        console.log(cantidad)
    }


return (
    <div>
    <h2>{producto.title}</h2>
    <h4>{producto.price}</h4>


    <CounterContainer stock={producto.stock} onAdd={onAdd} />
</div>
)
}

export default ItemDetail





