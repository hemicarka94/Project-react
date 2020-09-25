import React from 'react';
import { getAll } from '../sources';
import { CounterTerrorist } from './CounterTerrorist'
import { Terrorist } from './Terrorist'



export const Home = ({setFilter, setIspis, setZapretragu, setPojedinacno}) => {
    return (
        <div>
        <div className="pretraga">
            <input className="search" placeholder="Search..." onChange={(e)=> {
                return(
                    <>
                {setFilter(e.target.value)}
                
                    {getAll().then(res => {
                        setIspis(res.data)
                    })}
                       {setZapretragu(true)}
                </>
                )
                }}></input>
        </div>
            <div>
                <h1 className="opste">WEAPON BASE FROM COUNTER STRIKE:<br></br>GLOBAL OFFENSIVE</h1>
            </div>
            <div className="dugmectit">
                {<CounterTerrorist setFilter={setFilter} />}
                {<Terrorist setFilter={setFilter}/>}
            </div>

        </div>
    )
}