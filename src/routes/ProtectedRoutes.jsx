import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    let userRol = "admin"


return (
    <div>

        {
            userRol !== "admin" ? <Navigate to= {"/"} />  : <Outlet />
            
        }
        
    </div>
)
}

export default ProtectedRoutes