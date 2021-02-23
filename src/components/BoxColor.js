import React from 'react'

export default function BoxColor(props) {
    return (    
    <div className="box-color" style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}>
        rgb({props.r},{props.g},{props.b})
     </div>
    )
}