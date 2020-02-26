import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
<<<<<<< HEAD
import MyAccount from './home/MyAccount'
=======
import Register from './auth/Register'
import Login from './auth/Login'
>>>>>>> master

export default function ApplicationViews() {
    return (
        <>
           <Route path="/" render={props=> {
               return <Home {...props} />
           }}/>
<<<<<<< HEAD

           {/* path to customer profile */}
           <Route path="/myaccount" render={props=> {
               return <MyAccount {...props} />
           }}/>

           
=======
           <Route path="/register" render={props => {
               return <Register {...props} />
           }}/>
           <Route path="/login" render={props => {
               return <Login {...props} />
           }}/>
>>>>>>> master
        </>
    )
}
