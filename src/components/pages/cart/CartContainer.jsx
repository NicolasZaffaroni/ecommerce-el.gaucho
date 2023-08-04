import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Button } from "react-bootstrap"
import Swal from 'sweetalert2'
import { Card, CardContent, CardMedia, Typography } from "@mui/material"


const CartContainer = () => {
    const {cart, clearCart,deleteById, getTotalPrice} = useContext(CartContext)
    console.log(cart)
    let total = getTotalPrice()
    
    const limpiar = () =>{
        Swal.fire({
            title: 'Seguro quieres limpiar el carrito?',
            showDenyButton: true,
            confirmButtonText: 'Si, quiero ,limpiar',
            denyButtonText: `No,  quiero seguir mirando`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                clearCart()
            Swal.fire('Carrito Limpio!', '', 'success')
            } else if (result.isDenied) {
            Swal.fire('Carrito sigue con tus productos!', '', 'info')
            }
        })

    }

return (
    <div>
        <h1>Carrito</h1>
        {
            
            cart.map((elemento)=>{
                return( 
                <div key ={elemento.id} style={{padding:"40px"}}>

                    <Card sx={{ width: 250}}>
                    <CardMedia
                    component="img"
                    height="300"
                    image={elemento.img}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {elemento.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {elemento.description}
                    </Typography>
                    <Typography gutterBottom variant="h5" color="text.secondary">
                        {elemento.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {elemento.quantity}
                    </Typography>
                    </CardContent>
                    </Card>
                    <Button onClick={()=> deleteById() }>Eliminar</Button>
                </div>
                );
                
            })
        }
        {
            cart.length > 0 && <Button onClick={limpiar}>Limpiar carrito </Button>
        }

        <h2>El precio final es :{total}</h2>
        
    </div>
)
}

export default CartContainer