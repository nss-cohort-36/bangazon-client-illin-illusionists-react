import React from 'react'
import { useState, useEffect } from 'react'
import APIManager from '../helpers/APIManager'

export default function ProductDetail(props) {


    // add product to order - logic check for open order if there is none  create it the can be only one
    // from product details
    // first write a get for order by customer where there is no attached payment type

    const [productdetail, setProductDetail] = useState({
        product_type: {}
    })

    useEffect(() => {
        APIManager.getOne('products', props.match.params.productId)
            .then(response => {
                setProductDetail(response)
            })
    }, [])
    return (
        <>
            <h1>{productdetail.name}</h1>
            <p>{productdetail.price}</p>
            <p>{productdetail.description}</p>
            <p>{productdetail.quantity}</p>
            <p>{productdetail.location}</p>
            <p>{productdetail.image_path}</p>
            <p>{productdetail.product_type.name}</p>
            <button>Add Item to Cart</button>
        </>
    )
}
