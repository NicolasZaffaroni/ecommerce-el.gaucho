import React, { useContext, useEffect, useState } from 'react'
import CounterContainer from '../../common/counter/CounterContainer'
import { products } from '../../productsMock'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'




const ItemDetail = ({producto}) => {


        return (
            <div>

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
                <Typography gutterBottom variant="h5" color="text.secondary">
                    {producto.price}
                </Typography>
                </CardContent>
            </Card>

            </div>
        )
    }





export default ItemDetail





