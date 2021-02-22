import React from 'react'

export default function Random(props) {
    let randomValue = props.min + Math.floor(Math.random() * (props.max-props.min+1))
    return (    
    <div class="random-values">   
        <h2>Random value between {props.min} and {props.max} => {randomValue}</h2>
     </div>
    )
}