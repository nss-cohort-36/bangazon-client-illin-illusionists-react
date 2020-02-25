import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'

export default function ApplicationViews() {
    return (
        <>
           <Route path="/" render={props=> {
               return <Home {...props} />
           }}/>
        </>
    )
}
