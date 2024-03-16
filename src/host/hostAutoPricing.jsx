import { useOutletContext } from "react-router-dom"
function HostAutoPricing(){
    const [rdata] = useOutletContext()
    return(
        <div className="host-detail-b1">
            <p className="b1-price-name"><strong>Rs.{rdata.price}</strong>/day</p>
        </div>
    )
}

export default HostAutoPricing