import React from 'react'


export default function Rating(props) {
  let numberOfStars = Math.round(props.children)
    return (    
    <div className="star-rating">
        {"★".repeat(numberOfStars)}
        {"☆".repeat(5-numberOfStars)}
     </div>
    )
}



