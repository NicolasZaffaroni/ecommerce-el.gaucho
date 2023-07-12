import React from 'react'
import { Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'

export const NavBar = () => {
    return (
    <>
        <Navbar expand="lg" className="bg-body ">
    <Container>
        <Navbar.Brand ><img src="https://res.cloudinary.com/dmnvvzz6y/image/upload/v1689192651/icons8-mate-50_k6bigh.png" alt="" srcset="" />Matelandia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" me-auto justify-content-start">
            
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Yerbas Mate</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                Bombillas
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Mates</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Termos</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
    )
    }


