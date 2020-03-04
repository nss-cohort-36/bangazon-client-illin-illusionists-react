import React from 'react'

export default function ProductItem(props) {
    // Product Name
    // Current Inventory
    // Products Sold

    const productStyle = {
      margin: '10px',
      padding: '10px',
      border: '0.5px solid grey',
      borderRadius: '5px'
    }

    return (
        <>
          <div style={productStyle}>
            <p><strong>Item:</strong> {props.product.name}</p>   
            <p><strong>Current Inventory:</strong> {props.product.quantity - props.stats}</p>
            <p><strong># Sold:</strong> {props.stats}</p>
            <button onClick={() => props.deleteProduct(props.product.id)}>Delete</button>
          </div>
        </>
    )
}
