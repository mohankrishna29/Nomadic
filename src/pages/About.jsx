import { Link } from "react-router-dom"

function About(){
    return (
        <div className="about-main">
            <div className="content-img">
                <img className="about-img" src="../public/about.webp" />
            </div>
            <div className="about-content">
                <h3>Don't squeeze in a sedan when you could relax in a van.</h3>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br/>
                (Hitch costs extra 😉)</p>
            </div>
            <div className="sub-content">
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="link-section">
                <h4>Your destination is waiting.</h4>
                <h4>Your machine is ready.</h4>
                <Link to={"/auto"}><button>Explore our automobiles</button></Link>
            </div>

        </div>
    )
}

export default About