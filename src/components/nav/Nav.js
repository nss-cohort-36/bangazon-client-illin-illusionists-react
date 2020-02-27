import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { isAuthenticated, logout } from '../helpers/simpleAuth'
import './Nav.css'

export default function Nav() {
    
    // refresh the view after user logs out
    const history = useHistory()
    const handleLogout = () => {
        logout()
        history.push('/')
    }   

    return (
        <div className="nav-container">
            <ul className="nav-list">
                <li className="nav-list-item"><NavLink ClassName="nav-link" to='/' exact>Home</NavLink></li>
                <li ><NavLink ClassName="nav-list-item" to='/myaccount'>Profile</NavLink></li>
                <li><NavLink ClassName="nav-list-item" to='/sell'>Sell</NavLink></li>
                <li><NavLink ClassName="nav-list-item" to='/products'>My Products</NavLink></li>
                <li><NavLink ClassName="nav-list-item" to='/reports'>Reports</NavLink></li>
                <li><NavLink ClassName="nav-list-item" to='/orders'>Orders</NavLink></li>
                <li><NavLink ClassName="nav-list-item" to='/recommendations'>Recommendations</NavLink></li>
                <li><NavLink ClassName="nav-list-item" to='favorites'>Favorites</NavLink></li>
                <li><NavLink ClassName="nav-list-item" to='/cart'>Shopping Cart</NavLink></li>
                {isAuthenticated() ? <li><NavLink to='' onClick={handleLogout}>Logout</NavLink></li> :
                <>
                    <li><NavLink to='/register'>Register</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </>}
            </ul>   
        </div>
    )
}
