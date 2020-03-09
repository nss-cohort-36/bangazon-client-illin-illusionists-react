import React from 'react'

export default function ProductItem(props) {
    // Product Name
    // Current Inventory
    // Products Sold

    return (
        <>
          <tr>
            <td> {props.product.name}</td>
            <td> {!isNaN(props.stats) ? props.product.quantity - props.stats : '...'}</td>
            <td> {props.stats}</td>
            <td><button onClick={() => props.deleteProduct(props.product.id || props.orderProductId)}>Delete</button></td>
          </tr>
        </>
    )
}
