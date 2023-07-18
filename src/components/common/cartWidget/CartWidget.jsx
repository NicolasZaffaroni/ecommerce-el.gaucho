import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';


import { Link } from 'react-router-dom';






export const CartWidget = () => {




return (
    <>
    <Link to="/cart">
        <Badge badgeContent={1} color="primary">
            <AddShoppingCartIcon color="action" />
        </Badge>
    </Link>
    </>
)
}




