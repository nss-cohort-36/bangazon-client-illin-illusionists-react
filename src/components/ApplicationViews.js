import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
<<<<<<< HEAD
import OrderProductList from './home/OrderProductList'
import ProductList from './home/ProductList'
import Register from './auth/Register'
import Login from './auth/Login'
import ProductFormSell from './home/ProductFormSell'
=======
import MyAccount from './home/MyAccount'
import Register from './auth/Register'
import Login from './auth/Login'
import NewPaymentType from './home/NewPaymentType'
>>>>>>> master

export default function ApplicationViews() {
    return (
        <>
           <Route exact path="/" render={props=> {
               return <Home {...props} />
           }}/>
<<<<<<< HEAD
           <Route path="/orderproduct" render={props=> {
               return <OrderProductList {...props} />
           }}/>
           <Route path="/myproducts" render={props=> {
               return <ProductList {...props} />
           }} />
=======

           {/* path to customer profile */}
           <Route path="/myaccount" render={props=> {
               return <MyAccount {...props} />
           }}/>

           
>>>>>>> master
           <Route path="/register" render={props => {
               return <Register {...props} />
           }}/>
           <Route path="/login" render={props => {
               return <Login {...props} />
           }}/>
<<<<<<< HEAD
           <Route path="/sell" render={props => {
               return <ProductFormSell {...props} />
=======
           <Route path="/paymenttype/new" render={props => {
               return <NewPaymentType {...props} />
>>>>>>> master
           }}/>
        </>
    )
}
