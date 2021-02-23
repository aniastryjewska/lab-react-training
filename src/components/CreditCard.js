import React from 'react'

export default function CreditCard(props) {
let image = ''
    if (props.type === "Visa") {
        image = "./img/visa.png"} else if (props.type === "Master Card") {
           image="./img/master-card.svg"}
    return (    
    <div className="CreditCard" style={{
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
      }}>
      
       
       <div>
        <img className="CreditCardImage"src={image}/>
      </div>
      <br/>
       <div className="number">•••• •••• •••• {props.number.substr(-4)}</div>
       <br/>
       <div className="CreditCard-text">
      <div> 
      <span>Expires {props.expirationMonth}/{props.expirationYear.toString().substr(-2)} </span>
      <span>{props.bank}</span>
      </div>
        {props.owner}
        </div>
     </div>
    )
}