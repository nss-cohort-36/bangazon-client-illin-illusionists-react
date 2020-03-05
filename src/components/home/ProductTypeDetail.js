import React from 'react'

export default function ProductTypeDetail(props) {

    // title, quantity, and price/unit

    return (
        <div>
            {props.products.map(product => {
                return <>
                <h3>{product.name}</h3>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${product.price}</p>
                </>
            })}
        </div>
    )
}
