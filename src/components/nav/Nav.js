import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { isAuthenticated, logout } from '../helpers/simpleAuth'

export default function Nav() {
    
    // refresh the view after user logs out
    const history = useHistory()
    const handleLogout = () => {
        logout()
        history.push('/')
    }

    return (
        <>
            <ul>
                <li><Link to=''>Home</Link></li>
<<<<<<< HEAD
                <li><Link to=''>Profile</Link></li>
                <li><Link to='/sell'>Sell</Link></li>
                <li><Link to='/myproducts'>My Products</Link></li>
=======
                <li><Link to='/myaccount'>Profile</Link></li>
                <li><Link to=''>Sell</Link></li>
                <li><Link to=''>My Products</Link></li>
>>>>>>> master
                <li><Link to=''>Reports</Link></li>
                <li><Link to=''>Recommendations</Link></li>
                <li><Link to=''>Favorites</Link></li>
                <li><Link to=''>Shopping Cart</Link></li>
                {isAuthenticated() ? <li><Link to='' onClick={handleLogout}>Logout</Link></li> :
                <>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </>}
            </ul>   
        </>
    )
}
