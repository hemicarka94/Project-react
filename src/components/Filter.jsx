import React from 'react'
import { Opsirnije } from './Opsirnije'
import { useState } from 'react'


export const Filter = ({ispis, filter}) => {
    const[pojedinacno,setPojedinacno]= useState(0)

    const obradiPojedinacno = (e, id) => {
        e.preventDefault()
        if(pojedinacno === id){
            setPojedinacno(0)
        }
        else {
            setPojedinacno(id)
        }
    }

    return (
        ispis
            .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
            .map(el => {
                return (
                    <>
                        <div key={el.id} className="divizfiltera" >
                            <div key={el.id} style={{ backgroundImage: `url(${el.image})`, width: '250px', height: '170px' }}>
                                <p key={el.id} className="ufilteruparag">{el.name}</p>
                                {pojedinacno === el.id ? <Opsirnije el={el}/> : ""}   
                                <button value={el.id} className="btnnasvakom" onClick={(e)=>{
                                return(
                                    <>
                                    {obradiPojedinacno(e,el.id)}
                                </>
                                )}}>Details</button>
                            </div>
                            
                        </div>
                    </>
                )
            })
    )
}