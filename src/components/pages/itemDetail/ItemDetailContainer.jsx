import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './itemDetail'
import { useParams } from 'react-router-dom'
import { products } from '../../productsMock'
import { CartContext } from '../../../context/CartContext'
import Swal from 'sweetalert2'
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import CounterContainer from '../../common/counter/CounterContainer'

const ItemDetailContainer = () => {

    const {addToCart,getQuantityById}= useContext(CartContext)

    const [producto,setProducto] = useState({})

    const {id} = useParams()
    
    const totalQuantity = getQuantityById(id)
    console.log(totalQuantity)

    useEffect(()=>{
        let productosSeleccionado = products.find((elemento)=> elemento.id=== +id)
        const tarea = new Promise((respuesta, rej)=>{
            respuesta(productosSeleccionado)
        });
        tarea.then(respuesta => setProducto(respuesta))
    },[id]);


    const onAdd = (cantidad) =>{
        producto
        cantidad
        let productCart ={ ...producto, quantity:cantidad} 
        addToCart(productCart)
        toast.success("Producto agregado, al carrito ",{
            position:"top-right",
            autoClose:5000,
            hideProgressBar:false,
            newestOnTop:false,
            closeOnClick:true,
            rtl:false,
            draggable: true,
            pauseOnHover:undefined,
            theme:"light",
        });
    };




    return (

    <><ItemDetail producto={producto} />
    <CounterContainer stock={producto.stock} onAdd={onAdd} initial={totalQuantity}/>
    <ToastContainer />
    </>
    )
    
}

export default ItemDetailContainer