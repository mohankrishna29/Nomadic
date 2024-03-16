import { useParams, Link, Outlet, NavLink } from "react-router-dom"
import data from "../pages/autoData"

function HostAutomobiles(){
    const p = useParams()
    let auto = p.id-1
    let url = data[auto]['imageUrl'].slice(2)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return(
        <>
            <Link to=".." relative="path" className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-auto-detail">
                <div className="host-auto-detail-img">
                    <img className="host-auto-image" src={url} />
                    <div className="detail">
                        <div className={`auto-type-${data[auto]['type']}`}>{data[auto]['type']}</div>
                        <h2>{data[auto]['name']}</h2>
                        <p><strong>Rs.{data[auto]['price']}</strong>/day</p>
                    </div>
                </div>
            </div>
            <nav className="host-auto-detail-nav">
                <NavLink className="navlink-1" to="." end style={({ isActive }) => isActive ? activeStyles : null}>Details</NavLink>
                <NavLink className="navlink-1" to={"pricing"} style={({ isActive }) => isActive ? activeStyles : null}>Pricing</NavLink>
                <NavLink className="navlink-1" to={"photos"} style={({ isActive }) => isActive ? activeStyles : null}>Photos</NavLink>
            </nav>
            <Outlet context={[data[auto]]} />
        </>
    )
}

export default HostAutomobiles