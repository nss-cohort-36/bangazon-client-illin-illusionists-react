import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import OrderProductList from './home/OrderProductList'
import ProductList from './home/ProductList'

export default function ApplicationViews() {
    return (
        <>
           <Route path="/" render={props=> {
               return <Home {...props} />
           }}/>
           <Route path="/orderproduct" render={props=> {
               return <OrderProductList {...props} />
           }}/>
           <Route path="/myproducts" render={props=> {
               return <ProductList {...props} />
           }}/>
        </>
    )
}
