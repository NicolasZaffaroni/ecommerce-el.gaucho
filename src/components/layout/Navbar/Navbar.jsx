
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { CartWidget } from "../../common/cartWidget/CartWidget"
import { Box } from '@mui/material';



export const Navbar =( )=>{

    
    
        return (
        <><Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                            <MenuIcon />
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                            Productos
                        </Typography>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                            Contacto
                        </Typography>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                            Sobre Nosotros
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <CartWidget /></>
        )
        }
        
    
