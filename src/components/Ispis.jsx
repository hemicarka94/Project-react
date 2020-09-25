import React, { useState } from 'react'
import { Opsirnije } from './Opsirnije'


export const Ispis = ({tim}) => {
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
        <>
            {tim.map(el => {
                return (
                    <div key={el.name}>
                        <div style={{ backgroundImage: `url(${el.image})`, width: '250px', height: '170px' }} className="divsaslikom" key={el.id}>
                            <p key={el.id} className="paragnasvakom">{el.name}</p>
                            {pojedinacno === el.id ? <Opsirnije el={el}/> : ""}
                            <button value={el.id} className="btnnasvakom" onClick={(e)=>{
                                return(
                                    <>
                                    { obradiPojedinacno(e,el.id)}
                                </>
                                )}}>Details</button>                    
                        </div>
                       
                    </div>
                )
            })
            }
        </>
    )
}   