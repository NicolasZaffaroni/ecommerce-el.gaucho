import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

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
                    <Link to={`/itemDetail/${producto.id}`}>
                            <Button size="small">Ver detalles</Button>
                    </Link>
                </CardActions>
            </Card>
)
}

export default ProductCard