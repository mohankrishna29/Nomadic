import { Outlet, Navigate } from "react-router-dom"

function AuthRequired(){
    const authenticated  = true

    if (!authenticated){
        return <Navigate to={"/login"} state={{message:"You must login first !!"}} />
    }
    return <Outlet />
}

export default AuthRequired