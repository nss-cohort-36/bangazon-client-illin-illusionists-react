import React, { useState, useEffect} from 'react'
import ProductItem from './ProductItem'
import APIManager from '../helpers/APIManager'
import { Link } from 'react-router-dom'

export default function ProductList() {

    const [ productList, setProductList ] = useState([])
    // new state to manage inventor and # items sold for each product
    const [ productStats, setProductStats ] = useState({})

    // query param to only get the customer's products
    const getCustomerProductList = () => {
        APIManager.getAll('products?self=true')
        .then(setProductList)
    }

    const getOrderProducts = () => {
        // console.log('getOrderProducts ran')
        productList.forEach((product, index) => {
            APIManager.getAll(`orderproducts?product=${product.id}`)
            .then((orderproducts) => {
                setProductStats(prevState => {
                    return { ...prevState, [product.id]: orderproducts.length }
                })
            })
    })}

    const deleteProduct = id => {
        if (window.confirm('Are you sure you want to delete this item')){
            APIManager.deleteOne('products', id).then(getCustomerProductList)
        }
    }

    useEffect(getCustomerProductList, [])
    useEffect(getOrderProducts, [productList])

    return (
        <>
            {productList.length === 0 && <p>No products</p>}
            <Link to="/sell" >Add a product to sell</Link>
            <table style={{ width: '50%', textAlign: 'center'}}>
            <thead>
              <tr>
                  <td><strong>Item</strong></td>
                  <td><strong>Inventory</strong></td>
                  <td><strong>Number Sold</strong></td>
                  <td><strong>Actions</strong></td>
              </tr>
            </thead>
            <tbody>
                {productList.map((product, index) => {
                    return <ProductItem 
                                key={product.id} 
                                product={product}
                                deleteProduct={deleteProduct}
                                stats={productStats[product.id]}/>
                    }
                )}
            </tbody>
            </table>
        </>
    )
}
