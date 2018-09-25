import React from 'react'
export const Count = (props)=>{
    return(
        <div>
            <br/>
            <p>Number of Products available: {props.countfn}</p>
        </div>
    )
}