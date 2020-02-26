import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import OrderProductList from './home/OrderProductList'
import ProductList from './home/ProductList'
import Register from './auth/Register'
import Login from './auth/Login'

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
           }} />
           <Route path="/register" render={props => {
               return <Register {...props} />
           }}/>
           <Route path="/login" render={props => {
               return <Login {...props} />
           }}/>
        </>
    )
}
