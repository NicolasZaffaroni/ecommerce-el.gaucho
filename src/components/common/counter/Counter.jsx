import React from 'react'

const Counter = ({contador,restar,sumar, onAdd}) => {
return (
    <div style={{border:"2px solid steelblue", padding:"40px"}}>
        <button onClick={sumar}>Sumar</button>
        <h2>{contador}</h2>
        <button onClick={restar}>Restar</button>
        <button onClick={()=>onAdd(contador)}>Agregar al carrito</button>
    </div>
)
}

export default Counter