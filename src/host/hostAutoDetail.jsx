import { useOutletContext } from "react-router-dom"

function HostAutoDetail(){
    const [rdata] = useOutletContext()
    return(
        <div className="host-detail-b1">
            <p className="b1-name"><strong>Name : </strong>{rdata.name}</p>
            <p><strong>Category : </strong>{rdata.type}</p>
            <p><strong>Description : </strong>{rdata.description}</p>
            <p><strong>Visibility : </strong>Public</p>
        </div>
    )
}

export default HostAutoDetail