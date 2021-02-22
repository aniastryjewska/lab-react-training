import React from 'react'

export default function Greetings(props) {
    return (
    <div class="greetings-box">
   <h2>{props.children}</h2>
    </div>
    )
}
