import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import MyAccount from './home/MyAccount'
import Register from './auth/Register'
import Login from './auth/Login'

export default function ApplicationViews() {
    return (
        <>
           <Route path="/" render={props=> {
               return <Home {...props} />
           }}/>

           {/* path to customer profile */}
           <Route path="/myaccount" render={props=> {
               return <MyAccount {...props} />
           }}/>

           
           <Route path="/register" render={props => {
               return <Register {...props} />
           }}/>
           <Route path="/login" render={props => {
               return <Login {...props} />
           }}/>
        </>
    )
}
