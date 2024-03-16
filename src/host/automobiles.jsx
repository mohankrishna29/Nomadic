import data from "../pages/autoData"
import { Link } from "react-router-dom"

function HostListCard(props){
    return(
        <Link className="host-auto-link" to={`/host/automobiles/${props.id}`}><div className="host-card">
            <img className="host-card-img" src={props.src}></img>
            <div className="sub-det">
                <p className="host-p1"><strong>{props.name}</strong></p>
                <p className="host-p2">Rs.{props.price}/day</p>
            </div>
        </div></Link>
    )
}


function Automobiles(){
    const items = data.map((item) => {
            if (item.hostId === 111){
                return <HostListCard key={item.id} src={item.imageUrl} name={item.name} price={item.price} id={item.id} />
            }
    })
    return(
        <div className="host-auto-list">
            <h2>Your listed Automobiles</h2>
            <div className="host-cards">
                {items}
            </div>
        </div>
    )
}

export default Automobiles