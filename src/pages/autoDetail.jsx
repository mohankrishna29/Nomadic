import { useParams, Link, useLocation } from "react-router-dom"
import data from "./autoData.js"

function AutoDetail(){
    const p = useParams()
    const details = data[Number(p.id)-1]
    const location = useLocation()
    let curr_path= location.pathname
    let filler = location.state.type

    return(
        <div className="auto-detail">
            <Link to={`${curr_path.slice(0,-1)}?${location.state.search}`} relative="path" className="back-button2"
            >&larr; <span>Back to {filler && filler.toUpperCase()} Autos</span></Link>
            <img className="detail-img" src={details.imageUrl} />
            <h2>{details.name}</h2>
            <div className={`auto-type-${details.type}`}>
                {details.type}
            </div>
            <p className="detail-price"><strong>Rs.{details.price}</strong>/day</p>
            <p>{details.description}</p>
            <button className="detail-link-button">Rent this Machine</button>
        </div>
    )
}

export default AutoDetail