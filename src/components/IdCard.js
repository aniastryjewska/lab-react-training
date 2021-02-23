import React from 'react'

export default function IdCard(props) {
    return (
    <div className="id-box-image">
        <img src= {props.picture} alt="of-person"></img>
<div className="id-box">
    <h4>First name: {props.firstName}</h4>
    <h4>Last name: {props.lastName}</h4>
    <h4>Gender: {props.gender}</h4>
    <h4>Height: {props.height}</h4>
    <h4>Date of birth: {props.birth.toLocaleDateString()}</h4>
</div>
</div>

    )
}


