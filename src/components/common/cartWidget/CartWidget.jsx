import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';


import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';






export const CartWidget = () => {
    const {getTotalQuantity} = useContext(CartContext)
    let total = getTotalQuantity()




return (
    <>
    <Link to="/cart">
        <Badge badgeContent={total} showZero color="primary">
            <AddShoppingCartIcon color="main"   style={{ textDecoration: 'none' , color: 'black'}} sx={{fontSize:40}} />
        </Badge>
    </Link>
    </>
)
}




