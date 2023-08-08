
import { Input } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartContext } from '../../../context/CartContext'
import { baseDatos } from '../../../firebaseConfig'; 
import {addDoc, collection,serverTimestamp, updateDoc, doc } from "firebase/firestore"
import { Link } from 'react-router-dom';


const CheckOutContainer = () => {


    const [ orderId, setOrderId] = useState(false)

    const {cart, getTotalPrice  } = useContext (CartContext)
    
    let total = getTotalPrice()

    const [dataUser, setdataUser] = useState({
        name:"",
        email:"",
        phone :"",
    })

    const handleSubmit = (evento)=>{
    evento.preventDefault()
    let order = {
        buyer : dataUser,
        items : cart,
        total,
        date : serverTimestamp()
    }
    const ordersCollection = collection(baseDatos , "orders")
    addDoc(ordersCollection, order).then(res => setOrderId(res.id))



    cart.forEach((product) => {
        updateDoc( doc(baseDatos,"products", product.id),
        {stock: product.stock - product.quantity});
    });

    }  




    const handleChange = (evento) => {
        setdataUser( {...dataUser, [evento.target.name]: evento.target.value})
    };

return (
    <div>
        <h1>Finalice su Compra!</h1>

    {orderId ? (
                <>
                    <h2>Gracias por su compra!</h2>
                    <h3>Su numero de compra es : {orderId }</h3>
                    <Link to ="/">Vuelva a comprar</Link>
                </>) :  (
                    <Form onSubmit={handleSubmit}>

                        <Input type="text" placeholder='Ingrese su nombre' name="name" onChange={handleChange} />
                        <br />

                        <Input type="email" placeholder='Ingrese su email' name="email" onChange={handleChange} />

                        <br />

                        <Input type="text" placeholder='Ingrese su telefono' name="phone" onChange={handleChange} />


                        <Button type="submit">comprar</Button>
                    </Form>)
                    }

                    
    </div>

)
}

export default CheckOutContainer