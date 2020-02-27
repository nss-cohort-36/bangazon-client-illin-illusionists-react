import React, { useState, Component } from 'react'
import { useHistory } from 'react-router-dom'
import APIManager from '../helpers/APIManager'
import Settings from '../helpers/Settings';
import './CustomerEditForm.css'

class CustomerEditForm extends Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    username: ""
  }

  componentDidMount() {
    this.getCustomer()
  }
  
  handleInputChange = (evt) => {
    let stateToChange = {}
    stateToChange[evt.target.name] = evt.target.value
    this.setState(stateToChange)
  }

  getCustomer = () => {
    APIManager.getOne('users', this.props.match.params.customerId)
    .then(item => {
      console.log(item)
        this.setState({
          first_name: item.first_name,
          last_name: item.last_name,
          email: item.email,
          username: item.username
        })
    })
  }

  updateCustomer = () => {
    fetch(`http://localhost:8000/users/${this.props.match.params.customerId}`, {
      "method": "PATCH",
      "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${sessionStorage.getItem(Settings.token_name)}`
      },
      "body": JSON.stringify({
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
        "email": this.state.email,
        "username": this.state.username
      })
    })
    .then(() => {
        this.props.history.push("/myaccount")
    })
  }

  render() {
    return (
      <div className="form-container">
        <label className="form-label" htmlFor="first_name">First Name </label>
        <p className="form-desc" id="first_name"> {this.state.first_name}</p><br />
        
        <label className="form-label" htmlFor="last_name">Last Name</label>
        
        <input className="form-input"
          onChange={this.handleInputChange}
          type="text" name="last_name"
          value={this.state.last_name} 
          autoFocus required />< br/>
        
        <label className="form-label" htmlFor="email">Email</label> 
        <p className="form-desc" id="email">{this.state.email}</p><br />
        
        <label className="form-label" htmlFor="username">Username </label> 
        <p className="form-desc" id="username">{this.state.username}</p><br />

        <button className="form-button" onClick={this.updateCustomer}>Update Customer</button>
      </div>
    )
  }
}

export default CustomerEditForm
