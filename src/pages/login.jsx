import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Login(){
    const [data, setData] = useState({email : "", pass : ""})
    const location = useLocation()
    const navigate = useNavigate()

    function handleChange(e){
        const {name, value} = e.target
        setData(old => {
            let n = {...old}
            n[name]=value
            return n
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        navigate("/host")
    }
    return(
        <form onSubmit={handleSubmit} className="login-page">
            {location.state && <h3>{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            <input name="email" onChange={handleChange}placeholder="E-mail" className="login-email" type="email" />
            <input name="pass" onChange={handleChange} placeholder="Password" className="login-pass" type="password" />
            <button className="sign-button">Sign in</button>
            <p>Don't have an account? <span>Create one now</span></p>
        </form>
    )
}

export default Login