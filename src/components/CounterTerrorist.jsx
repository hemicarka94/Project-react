import React from 'react';
import { Link } from 'react-router-dom';


export const CounterTerrorist = ({setFilter}) => {
    return(
        <>
        {console.log("proba2")}
        {<Link to="/ct"><button className="dugmect" onClick={()=> setFilter('')}><h1>Counter Terrorist</h1></button></Link>}
        </>
        )
}