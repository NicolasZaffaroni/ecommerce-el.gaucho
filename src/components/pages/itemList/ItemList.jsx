
import { useState } from "react"
import CounterContainer from "../../common/counter/CounterContainer"
import ProductCard from "../../common/productCard/ProductCard";
import { Box } from "@mui/material";
import { Container } from "react-bootstrap";

export const ItemList = ( {items}) => {


    console.log("llegaron los productos",items);



    return (
    <Box>
        <h2>Productos</h2>
        <Container style={
            {
                width:"50%",
                display:"flex",
                justifyContent:"space-between",
                flexWrap:"wrap"
                }} >
        {
            items.map((producto)=>{
            return (
                <ProductCard key={producto.id} producto={producto} isInItemlist={true} />
            );
        }
                )
            
            }
        </Container>
    </Box>
    
)
}

