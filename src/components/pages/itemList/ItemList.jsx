
import { useState } from "react"
import CounterContainer from "../../common/counter/CounterContainer"
import ProductCard from "../../common/productCard/ProductCard";
import { Box, Skeleton } from "@mui/material";
import { Container } from "react-bootstrap";

export const ItemList = ( {items}) => {
    let array = [ 1,2,3,4]


    console.log("llegaron los productos",items);



    return (
    <Box>
        <h2>Productos</h2>
        <Container style={
            {
                width:"50%",
                display:"flex",
                justifyContent:"space-evenly",
                flexWrap:"wrap"
                }} >


        {
            items.length > 0 ?       items.map((producto)=>{
                return (
                    <ProductCard key={producto.id} producto={producto} isInItemlist={true} />
                );
            }) : array.map(e => {
                return (
                    <div key={e}>
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="text" sx={{ fontSize: '1.4 rem' }} width={100} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }}  width={200}/>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }}  width={50}/>
                
                </div>
                )
                
            
            }

            )
        }
        </Container>
    </Box>
    
)
}

