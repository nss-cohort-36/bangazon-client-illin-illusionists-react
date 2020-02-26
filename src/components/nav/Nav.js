import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
    return (
        <>
            <ul>
                <li><Link to=''>Home</Link></li>
                <li><Link to=''>Profile</Link></li>
                <li><Link to=''>Sell</Link></li>
                <li><Link to=''>My Products</Link></li>
                <li><Link to=''>Reports</Link></li>
                <li><Link to=''>Recommendations</Link></li>
                <li><Link to=''>Favorites</Link></li>
                <li><Link to=''>Shopping Cart</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>   
        </>
    )
}
