import React from 'react'
import { NavLink, useHistory, useParams } from 'react-router-dom'
import { isAuthenticated, logout } from '../helpers/simpleAuth'
import { useState, useEffect } from 'react'
import APIManager from '../helpers/APIManager'
import './Nav.css'

export default function Nav() {

    
    // refresh the view after user logs out
    const history = useHistory()
    const handleLogout = () => {
        logout()
        history.push('/')
    }  
    
    
    const [categories, setCategories] = useState([])

    const getProductCategories = () => {
        APIManager.getAllNoAuth("producttypes")
        .then(response => setCategories(response))
    }

    useEffect(getProductCategories, [])

    const handleFieldChange = event => {
        history.push(`/category/${event.target.value}`)
    }
    return (
        <div className="nav-container">
            <ul className="nav-list">
                <li className="nav-list-item"><NavLink activeClassName="active-link" to='/' exact>Home</NavLink></li>
                <li className="nav-list-item"><NavLink activeClassName="active-link" to='/myaccount'>Profile</NavLink></li>
                <li className="nav-list-item"><NavLink activeClassName="active-link" to='/search'>Search</NavLink></li>
                <li className="nav-list-item"><NavLink activeClassName="active-link" to='/sell'>Sell</NavLink></li>
                <li className="nav-list-item"><NavLink activeClassName="active-link" to='/myproducts'>My Products</NavLink></li>
                <li className="nav-list-item"><NavLink activeClassName="active-link" to='/reports'>Reports</NavLink></li>
                <li className="nav-list-item"><NavLink activeClassName="active-link" to='/orders'>Orders</NavLink></li>
                <li className="nav-list-item"><NavLink activeClassName="active-link" to='/reccomendations'>Recommendations</NavLink></li>
                <li className="nav-list-item"><NavLink activeClassName="active-link" to='/favorites'>Favorites</NavLink></li>
                <li className="nav-list-item"><NavLink activeClassName="active-link" to='/cart'>Shopping Cart</NavLink></li>
                {isAuthenticated() ? <li className="nav-list-item"><NavLink to='' onClick={handleLogout}>Logout</NavLink></li> :
                <>
                    <li className="nav-list-item"><NavLink activeClassName="active-link" to='/register'>Register</NavLink></li>
                    <li className="nav-list-item"><NavLink activeClassName="active-link" to='/login'>Login</NavLink></li>
                </>}
            </ul>   
                <div>
                    <ul>
                        <label>Products</label>
                        <select 
                        id="product_type_id"
                        onChange={handleFieldChange}
                        value={history.location.pathname.split("/")[2]}
                        >
                            {categories.map(type =>
                                    <option 
                                    key={type.id} 
                                    value={type.id}
                                    >
                                        {type.name}
                                    </option>
                            )}
                        </select>
                <NavLink activeClassName="active-link" to='/productcategories'></NavLink>
                    </ul>
                </div>
        </div>
    )
}
