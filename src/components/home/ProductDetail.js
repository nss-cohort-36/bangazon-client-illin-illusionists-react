import React from 'react'
import { useState, useEffect } from 'react'
import APIManager from '../helpers/APIManager'
import { useHistory } from 'react-router-dom'

export default function ProductDetail(props) {


    const [productdetail, setProductDetail] = useState({
        product_type: {}
    })

    const history = useHistory()

    useEffect(() => {
        APIManager.getOne('products', props.match.params.productId)
            .then(response => {
                setProductDetail(response)
            })
    }, [props.match.params.productId])

    const AddItem = (id) => {
        APIManager.createNew('orderproducts/cart', {"product_id": id})
        .then(() => history.push("/cart"))
    }

    return (
        <>
            <h1>{productdetail.name}</h1>
            <p>{productdetail.price}</p>
            <p>{productdetail.description}</p>
            <p>{productdetail.quantity}</p>
            <p>{productdetail.location}</p>
            <p>{productdetail.image_path}</p>
            <p>{productdetail.product_type.name}</p>
            <button onClick={() => AddItem(productdetail.id)}>Add Item to Cart</button>
        </>
    )
}
