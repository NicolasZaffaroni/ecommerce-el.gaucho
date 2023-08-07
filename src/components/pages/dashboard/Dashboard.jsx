import React from 'react'
import { products } from '../../productsMock'
import {addDoc , collection} from "firebase/firestore"
import { baseDatos } from '../../../firebaseConfig'
import { Button } from "@mui/material"



const Dashboard = () => {

    const rellenar = () => {
        products.forEach((product)=> {
            let refCollection = collection(baseDatos, "products")
            addDoc(refCollection, product)
        })

    }



return (
    <div>Dashboard
        <br />
        <Button onClick={rellenar}> Rellenar base de datos  </Button>
    </div>
)
}

export default Dashboard