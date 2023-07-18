import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { products } from '../../productsMock';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const[items, setItems] = useState([])
    const[error, setError] = useState("")

    const {categoryNombre} = useParams()
    


    useEffect( ()=>{ 
    let productsFiltrados = products.filter( (elemento) => elemento.category === categoryNombre 
    );
    const tarea = new Promise((resolve, reject)=>{
        resolve(categoryNombre === undefined ? products : productsFiltrados);
        // reject("Salio mal") 
    });

    tarea
    .then((respuesta)=> setItems(respuesta))
    .catch((error)=> setError(error));
}
    ,[categoryNombre] ) ;


    

    return <ItemList items={items} />;


};

export default ItemListContainer