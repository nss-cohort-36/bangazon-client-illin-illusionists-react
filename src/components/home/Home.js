import React, { useState, useEffect } from 'react'
import APIManager from '../helpers/APIManager'
import ProductItem from '../products/ProductItem'
import { isAuthenticated } from '../helpers/simpleAuth';

export default function Home() {

    const [productList, setProductList] = useState([]);


    const getProductList = () => {
        if (isAuthenticated()) {
            APIManager.getAll('products?limit=20').then(setProductList)
        } else {
            APIManager.getAllNoAuth('products?limit=20').then(setProductList)
        }
    };

    useEffect(getProductList, [])

    return (
        <>
            {isAuthenticated() && <h1>Latest 20 Products</h1>}
            {productList.map((item) => <ProductItem key={item.id} item={item} />)}

        </>
    )
}
