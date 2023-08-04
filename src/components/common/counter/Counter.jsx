import { Button } from 'react-bootstrap'
import React from 'react'
import { ButtonToolbar, Container } from 'react-bootstrap'

const Counter = ({contador,restar,sumar, onAdd,}) => {
return (
    <Container style={{ padding:"40px"}}>
        <Button onClick={sumar}>Agregar Producto</Button>
        <h2>{contador}</h2>
        <Button onClick={restar}>Quitar Producto</Button>
        <Button onClick={()=>onAdd(contador)}>Agregar al carrito</Button>
    </Container>
)
}

export default Counter