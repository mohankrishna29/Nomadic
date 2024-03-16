import {  Link } from "react-router-dom"

function ErrorPage(){
    return(
        <div className="error-page">
            <h2>Sorry the Page you were looking was not found!</h2>
            <Link to="/" className="error-home-button">Return to Home</Link>
        </div>
    )
}

export default ErrorPage