import React, { useState, useEffect} from 'react'
import ProductItem from './ProductItem'
import APIManager from '../helpers/APIManager'

export default function ProductList() {

    const [ productList, setProductList ] = useState([])

    const getProductList = () => {
        APIManager.getAll('products')
        .then(setProductList)
    }

    useEffect(getProductList, [])

    return (
        <>
            {productList.map((product) => 
                <ProductItem key={product.id} product={product}/>
            )}
        </>
    )
}
