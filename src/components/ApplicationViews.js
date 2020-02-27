import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import OrdersItemList from './home/OrdersItemList'
import MyAccount from './home/MyAccount'
import Register from './auth/Register'
import Login from './auth/Login'
import NewPaymentType from './home/NewPaymentType'
import CustomerEditForm from './home/CustomerEditForm'

export default function ApplicationViews() {
    return (
        <>
           <Route exact path="/" render={props=> {
               return <Home {...props} />
           }}/>

           <Route path="/orders" render={props=> {
               return <OrdersItemList {...props} />
           }}/>
           {/* path to customer profile */}
           <Route path="/myaccount" render={props=> {
               return <MyAccount {...props} />
           }}/>
            <Route path="/customers/:customerId(\d+)/edit" render={props => {
            console.log(props)
            return <CustomerEditForm {...props} />
            }}
            />
           
           <Route path="/register" render={props => {
               return <Register {...props} />
           }}/>
           <Route path="/login" render={props => {
               return <Login {...props} />
           }}/>
           <Route path="/paymenttype/new" render={props => {
               return <NewPaymentType {...props} />
           }}/>
        </>
    )
}
