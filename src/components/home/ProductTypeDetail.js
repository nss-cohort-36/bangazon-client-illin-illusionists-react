import React from 'react'

export default function ProductTypeDetail(props) {

    // title, quantity, and price/unit

    return (
        <div>
            <h2>{props.type.name}</h2>
            <p>Quantity: {props.type.quantity}</p>
            <p>Price: ${props.type.price}</p>
        </div>
    )
}
