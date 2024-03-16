import { useOutletContext } from "react-router-dom"

function HostAutoPhotos(){
    const [rdata] = useOutletContext()
    let url = rdata['imageUrl'].slice(2)
    return(
        <div className="host-detail-b1">
            <img className="b1-photos-img" src={url} />
        </div>
    )
}

export default HostAutoPhotos