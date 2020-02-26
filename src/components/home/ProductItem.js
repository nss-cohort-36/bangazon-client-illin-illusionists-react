import React from 'react'

export default function ProductItem(props) {
    // Product Name
    // Current Inventory
    // Products Sold

    return (
        <>
          <p>{props.product.name}</p>   
          <p>{props.product.quantity}</p>   
          <p>{props.product.quantity}</p>   
        </>
    )
}
