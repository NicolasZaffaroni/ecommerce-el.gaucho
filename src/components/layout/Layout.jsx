import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import { NavBar } from "./Navbar/Navbar"


const Layout = () => {
return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
)
}

export default Layout