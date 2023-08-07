import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './itemDetail'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import Swal from 'sweetalert2'
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import CounterContainer from '../../common/counter/CounterContainer'
import { baseDatos } from '../../../firebaseConfig'
import {getDoc, collection , doc} from "firebase/firestore"



const ItemDetailContainer = () => {

    const {addToCart,getQuantityById}= useContext(CartContext)

    const [producto,setProducto] = useState({})

    const { id } = useParams()

    const totalQuantity = getQuantityById(id)

    useEffect(()=>{
        let productsCollection = collection( baseDatos, "products")
        let productRef = doc( productsCollection, id)
        getDoc(productRef).then(res => {
            setProducto({...res.data(), id: res.id})
        })
    }, [id]);


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



    const initial = !totalQuantity ? 1 : totalQuantity;


    return (

        

    <><ItemDetail producto={producto} />
        {
        (  typeof(totalQuantity) ==="undefined" || producto.stock > totalQuantity  ) &&  producto.stock > 0 && (<CounterContainer stock={producto.stock} onAdd={onAdd} initial={initial}/> )
        }

        {
        producto.stock === 0 &&(<h2>No hay en stock actualmente</h2>)
        }

        {
            typeof(totalQuantity) !== "undefined" && totalQuantity === producto.stock && (<h2>Tenes las cantidad maxima en el carrito </h2> ) 
        }


    <ToastContainer />
    </>
    )
    
}

export default ItemDetailContainer