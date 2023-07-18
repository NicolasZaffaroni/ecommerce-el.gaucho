import React from 'react'
import { Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'
import { CartWidget } from '../../common/cartWidget/CartWidget'
import { Link, Outlet } from 'react-router-dom'

export const NavBar = () => {
    return (
    <>
        <Navbar expand="lg" className="bg-body ">
    <Container>
        <Navbar.Brand ><img src="https://res.cloudinary.com/dmnvvzz6y/image/upload/v1689192651/icons8-mate-50_k6bigh.png" alt="" srcset="" /><Link to="/" style={{ textDecoration: 'none' , color: 'black'}} >Matelandia</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" me-auto justify-content-start">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"><Link style={{ textDecoration: 'none' , color: 'black'}} to="/category/yerbas">Yerba Mate</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            <Link  style={{ textDecoration: 'none', color: 'black' }} to="/category/bombillas">Bombillas</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><Link  style={{ textDecoration: 'none', color: 'black'}} to="/category/mates">Mates</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"><Link style={{ textDecoration: 'none', color: 'black' }} to="/category/termos">Termos</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><Link style={{ textDecoration: 'none' , color: 'black'}} to="/">Todos</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><Link style={{ textDecoration: 'none' , color: 'black'}} to="/contacto">Contacto</Link></Nav.Link>
            <Nav.Link href="#link"><Link  style={{ textDecoration: 'none' , color: 'black' }}to="/about">About</Link></Nav.Link>
            <CartWidget  />
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
    }


