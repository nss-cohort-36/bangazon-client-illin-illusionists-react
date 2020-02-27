import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from './home/Home'
import OrderProductList from './home/OrderProductList'
import ProductList from './home/ProductList'
import OrdersItemList from './home/OrdersItemList'
import MyAccount from './home/MyAccount'
import Register from './auth/Register'
import Login from './auth/Login'
import ProductFormSell from './home/ProductFormSell'
import NewPaymentType from './home/NewPaymentType'
import CustomerEditForm from './home/CustomerEditForm'
import ProductDetail from './home/ProductDetail'
import { isAuthenticated } from './helpers/simpleAuth'

export default function ApplicationViews() {
    return (
        <>
        
           <Route exact path="/" render={props=> {
               return <Home {...props} />
           }}/>
           <Route path="/orderproduct" render={props=> {
                if (isAuthenticated()){
                    return <OrderProductList {...props} />    
               }
               return <Redirect to="/login" />
           }}/>
           <Route path="/myproducts" render={props=> {
                if (isAuthenticated()){
               return <ProductList {...props} />
                }
                return <Redirect to="/login" />
           }} />
           <Route path="/products/:productId(\d+)" render={props=> {
                    if (isAuthenticated()){
               return <ProductDetail {...props} />
                    }
                    return <Redirect to="/login" />
           }} />

           <Route path="/orders" render={props=> {
                    if (isAuthenticated()){
               return <OrdersItemList {...props} />
                    }
                    return <Redirect to="/login" />
           }}/>
           {/* path to customer profile */}
           <Route path="/myaccount" render={props=> {
                    if (isAuthenticated()){
               return <MyAccount {...props} />
                    }
                    return <Redirect to="/login" />
           }}/>
            <Route path="/customers/:customerId(\d+)/edit" render={props => {
                 if (isAuthenticated()){
            return <CustomerEditForm {...props} />
                 }
                 return <Redirect to="/login" />
            }}
            />
           
           <Route path="/register" render={props => {
               return <Register {...props} />
           }}/>
           <Route path="/login" render={props => {
               return <Login {...props} />
           }}/>
           <Route path="/sell" render={props => {
                if (isAuthenticated()){
               return <ProductFormSell {...props} />
                }
                return <Redirect to="/login" />
           }}/>
           <Route path="/paymenttype/new" render={props => {
               if (isAuthenticated()){
               return <NewPaymentType {...props} />
               }
                return <Redirect to="/login" />
               
           }}/>
        </>
    )
}
