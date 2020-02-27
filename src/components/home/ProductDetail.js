import React from 'react'

export default function ProductDetail(props) {
    return (
        <>
            <h1>{props.productdetail.name}</h1>
            <p>{props.productdetail.price}</p>
            <p>{props.productdetail.description}</p>
            <p>{props.productdetail.quantity}</p>
            <p>{props.productdetail.location}</p>
            <p>{props.productdetail.image_path}</p>
            {/* <p>{props.productdetail.product_type.name}</p> */}
        </>
    )
}
