import { Outlet, NavLink } from "react-router-dom"

function HostLayout(){
    let activeStyle = {
                fontWeight: "bold",
                textDecoration: "underline",
                color: '#161616',
                fontFamily: "Inter"
                }
    let hostSublinks = {
        border: "none",
        backgroundColor: '#FFF7ED',
        color: '#4D4D4D',
        textDecoration: "none",
        fontFamily: "Inter"
      }
    return(
        <div className="host">
            <div className="host-links">
                <NavLink to={"/host"} end style={({isActive}) => isActive ? activeStyle : hostSublinks} >Dashboard</NavLink>

                <NavLink to={"/host/income"} style={({isActive}) => isActive ? activeStyle : hostSublinks}>Income</NavLink>

                <NavLink to={"/host/automobiles"} style={({isActive}) => isActive ? activeStyle : hostSublinks}>Automobiles</NavLink>

                <NavLink to={'/host/reviews'} style={({isActive}) => isActive ? activeStyle : hostSublinks}>Reviews</NavLink>
            </div>
            <Outlet />    
        </div>
    )
}

export default HostLayout