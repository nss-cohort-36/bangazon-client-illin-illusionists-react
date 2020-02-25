import React, { useState, useEffect } from 'react'
import APIManager from '../helpers/APIManager'
import ProductItem from '../products/ProductItem'

export default function Home() {

    const [productList, setProductList] = useState([]);

    const getProductList = () => {
        APIManager.getAll('products')
                .then(setProductList)
        };

        useEffect(getProductList, [])

        return (
            <>
                <h1>Latest 20 Products</h1>
                {productList.map((item) => <ProductItem key={item.id} item={item} />)}

            </>
        )
    }
