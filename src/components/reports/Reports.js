import React from 'react'
import { Route, Link } from 'react-router-dom'
import AbandonedProductTypes from './AbandonedProductTypes'

export default function Reports() {
    return (
        <div>
            <h3>Reports to Run</h3>
            <ul>
                <li><Link to="/reports/abandonedproducttypes">Abandoned Product Types</Link></li>
            </ul>
            <Route exact path="/reports/abandonedproducttypes" render={props => {
                return <AbandonedProductTypes />
            }} />
        </div>
    )
}
