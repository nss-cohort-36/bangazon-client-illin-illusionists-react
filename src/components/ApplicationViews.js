import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import OrdersItemList from './home/OrdersItemList'

export default function ApplicationViews() {
    return (
        <>
           <Route path="/" render={props=> {
               return <Home {...props} />
           }}/>
           <Route path="/orders" render={props=> {
               return <OrdersItemList {...props} />
           }}/>
        </>
    )
}
