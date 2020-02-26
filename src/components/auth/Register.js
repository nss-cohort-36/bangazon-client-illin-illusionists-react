import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { register } from '../helpers/simpleAuth'

export default function Register() {
    const [user, setUser] = useState()
    const history = useHistory()

    // capture all the form fields usings the custom hook to target each unique key
    const handleInputChange = evt => {
        setUser({
            ...user, // hooks are greedy; have to use spread operator to keep previous vals
            [evt.target.id]: evt.target.value
        })
    }

    const handleRegister = evt => {
        evt.preventDefault()

        // create object based on state
        const new_user = {
            "username": user.userName,
            "first_name": user.firstName,
            "last_name": user.lastName,
            "email": user.email,
            "password": user.password
          }

        // console.log('new_user', new_user)
        // Make fetch call with the object as the body of the POST request
        register(new_user).then(response => {
          if (response === true){
            history.push('/')
          }
        });
    }

    return (
        <main style={{ textAlign: "center" }}>
        <form className="form--login" onSubmit={handleRegister}>
          <h1 className="h3 mb-3 font-weight-normal">Register for Bangazon</h1>
          <fieldset>
            <label htmlFor="userName"> Username </label>
            <input onChange={(evt) => handleInputChange(evt)}
              id="userName"
              type="text"
              name="userName"
              className="form-control"
              placeholder="Username"
              required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="firstName"> First Name </label>
            <input onChange={handleInputChange}
              id="firstName"
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First name"
              required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName"> Last Name </label>
            <input onChange={handleInputChange}
              id="lastName"
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last name"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input onChange={handleInputChange}
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="Email address"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input onChange={handleInputChange}
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="verifyPassword"> Verify Password </label>
            <input onChange={handleInputChange}
              id="verifyPassword"
              type="password"
              name="verifyPassword"
              className="form-control"
              placeholder="Verify password"
              required />
          </fieldset>
          <fieldset>
            <button type="submit">
              Register
            </button>
          </fieldset>
        </form>
      </main>
    )
}
