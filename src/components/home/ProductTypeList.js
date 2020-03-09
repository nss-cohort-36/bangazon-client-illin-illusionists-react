import React from 'react'
import APIManager from '../helpers/APIManager'
import { useState, useEffect } from 'react'
import ProductTypeDetail from "./ProductTypeDetail"


export default function ProductTypeList(props) {

    const [productType, setproductType] = useState([])

    const getProducts = () => {
        console.log("function runs")
        APIManager.getAllNoAuth(`products?category=${props.match.params.productTypeId}`)
        .then(response => setproductType(response))
    }

    useEffect(getProducts, [props.match.params.productTypeId])

    return (
        <div>
            {productType.map(type => {
                return <ProductTypeDetail key={type.id} type={type} />
            })}
        </div>
    )
}
