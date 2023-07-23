import React, { useEffect, useState } from 'react'
import CounterContainer from '../../common/counter/CounterContainer'
import { products } from '../../productsMock'
import { useParams } from 'react-router-dom'



const ItemDetail = ({producto}) => {


        return (
            <div>
                <h2>{producto.title}</h2>
                
                <h4>{producto.price}</h4>
            </div>
        )
    }





export default ItemDetail





