import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const ProductCard = ({producto,isInItemlist}) => {
return (
    <Card  sx={{ width: 250}}>
                <CardMedia
                component="img"
                height="300"
                image={producto.img}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {producto.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {producto.description}
                </Typography>
                </CardContent>
                <CardActions>
                    {isInItemlist ? (
                            <Button size="small">Ver detalles</Button>
                        ):(
                            <Button size="small">Eliminar del carrito</Button>
                        )}
                
                </CardActions>
            </Card>
)
}

export default ProductCard