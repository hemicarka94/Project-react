import React from 'react';
import { Link } from 'react-router-dom';


export const Terrorist = ({setFilter}) => {
    return(
        <>
        {console.log("proba1")}
        {<Link to="/tt"><button className="dugmett" onClick={()=> setFilter('')}><h1>Terrorist</h1></button></Link>}
        </>
    )
}
