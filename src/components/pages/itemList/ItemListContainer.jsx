import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { products } from '../../productsMock';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const[items, setItems] = useState([])
    const[error, setError] = useState("")


    useEffect( ()=>{ 
    const tarea = new Promise((resolve, reject)=>{
        resolve(products);
        // reject("Salio mal") 
    });

    tarea
    .then((respuesta)=> setItems(respuesta))
    .catch((error)=> setError(error));
}
    ,[] ) ;


    

    return <ItemList items={items} />;


};

export default ItemListContainer