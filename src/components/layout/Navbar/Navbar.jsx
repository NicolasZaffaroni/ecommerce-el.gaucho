import { CartWidget } from "../../common/cartWidget/CartWidget"



export const Navbar =( )=>{

    
    
    
    
    return ( 
        
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">Matelandia</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Mates</a></li>
                    <li><a href="badges.html">Bombillas</a></li>
                    <li><a href="collapsible.html">Termos</a></li>
            </ul>
        </div>
        <CartWidget /> 
    </nav>
    )
    
}



