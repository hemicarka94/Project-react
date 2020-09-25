import React from 'react'

export const Opsirnije = ({el}) => {
    return (
        <div key={el.id}className="ispisoruzja">
            <p className="opsirnije">Category : {el.category}</p>
            <p className="opsirnije">Origin : {el.origin}</p>
            <p className="opsirnije">Caliber : {el.caliber}</p>
            <p className="opsirnije">Number of bullets : {el.number_of_bullets}</p>
            <p className="opsirnije">Damage : {el.damage}</p>
            <p className="opsirnije">Price : {el.price}</p>
            {console.log(el.name)}
            {console.log(el.caliber)}

        </div>
    )
}