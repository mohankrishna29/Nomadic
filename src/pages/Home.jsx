import { Link } from "react-router-dom"

function Home(){
    return(
        <>
            <div className="content">
                <img className="home-img" src="../public/home-bg.jpg"></img>
            </div>
            <div className="content-text">
                <h3>You got the travel plans we got the travel vans.</h3>
                <p>Add adventure to your life by joining the #Nomad movement.</p>
                <p>Rent the perfect machine to make your perfect road trip.</p>
                <Link to={"/auto"}><button className="home-button">Find your crate</button></Link>
            </div>
        </>
    )
}

export default Home