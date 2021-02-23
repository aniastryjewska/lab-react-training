import React from 'react'


export default function DriverCard(props) {
    let numberOfStars = Math.round(props.rating)
      
    return (    
    <div className="driver-card">
    <img className="driver-image" src={props.img}/>
    <div>
    <h1>{props.name}</h1>
    <div className="star-rating">
        {"★".repeat(numberOfStars)}
        {"☆".repeat(5-numberOfStars)}
     </div>
    <br/>
    {props.car.model} - {props.car.licensePlate}
    </div>
     </div>
    )
}
