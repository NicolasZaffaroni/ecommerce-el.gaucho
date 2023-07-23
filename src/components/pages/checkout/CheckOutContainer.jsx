
import { Input } from '@mui/material'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


const CheckOutContainer = () => {
    
    /*const [nombre, setNombre] = useState ("")
    const [apellido, setApellido] = useState ("")*/

    const [dataUser, setdataUser] = useState({
        nombre: "",
        apellido: ""
    })

    const handleSubmit = (evento)=>{
    evento.preventDefault()
    console.log("se envio")
    }

    console.log(dataUser)

    const handleChange = (evento) => {
        setdataUser( {...dataUser, [evento.target.name]: evento.targer.value})
    };

return (
    <div>
        <h1>CheckOutContainer</h1>

        <Form onSubmit={ handleSubmit } >
            
        <Input type="text" placeholder='Ingrese su nombre' name="nombre" onChange={handleChange} />
        <br />

        <Input type="text" placeholder='Ingrese su apellido' name="apellido" onChange={handleChange} />

        <br />

        <Button type="submit">Enviar</Button>
        </Form>
    </div>

)
}

export default CheckOutContainer