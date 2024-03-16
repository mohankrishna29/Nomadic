import {NavLink, Link} from "react-router-dom"

function Nav(){
    return (
        <nav>
            <Link className="main-link" to="/"><h2>#Nomadic</h2></Link>
            <div className="links">
                <NavLink className={(obj) => obj.isActive ? "active-sub-link" : "sub-links"} to={"/host"}>Host</NavLink>
                <NavLink className={(obj) => obj.isActive ? "active-sub-link" : "sub-links"} to={"/about"}>About</NavLink>
                <NavLink className={(obj) => obj.isActive ? "active-sub-link" : "sub-links"} to={"/auto"}>Automobiles</NavLink>
                <NavLink to={"/login"}><img src="/public/login.jpeg" className="login-img" /></NavLink>
            </div>
        </nav>
    )
}

export default Nav