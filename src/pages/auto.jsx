import { useEffect, useState } from "react";
import data from "./autoData.js"
import { Link, useSearchParams, NavLink } from "react-router-dom"

function AutoCard(props){
    return(
        <Link className="autodetail-link" state={{search: props.pprams, type : props.filter}} to={`/auto/${props.id}`}><div className="card">
            <img className="auto-img" src={props.url}></img>
            <div className="auto-name">
                <h3>{props.title}</h3>
                <p><strong>Rs.{props.price}</strong></p>
            </div>
            <div className="auto-day-align">/day</div>
            <div className={`auto-type-${props.type}`}>{props.type}</div>
        </div></Link>
    )
}
function Auto(){

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const rData = typeFilter ? data.filter((item) => item.type.toLocaleLowerCase() === typeFilter) : data

    const elements = rData.map((item) => {
        return <AutoCard key={item.id} id={item.id} url={item.imageUrl} title={item.name} price={item.price} type={item.type} pprams={searchParams.toString()} filter={typeFilter}/>
    })

    return(
        <div className="auto">
            <h2 className="auto-head">Explore our vehicle options</h2>
            <div className="auto-filter-buttons">
                <div className="buttons">
                    <NavLink to="?type=land"><button>Land</button></NavLink>
                    <NavLink to="?type=water"><button>Water</button></NavLink>
                    <NavLink to="?type=air"><button>Air</button></NavLink>
                </div>
                {typeFilter && <div className="clear">
                    <Link to=""><button>Clear filters</button></Link>
                </div>}
            </div>
            <div className="auto-cards">
                {elements}
            </div>
        </div>
    )

}

export default Auto