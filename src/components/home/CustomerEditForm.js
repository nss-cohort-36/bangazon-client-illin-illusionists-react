import React, { useState, Component } from 'react'
import { useHistory } from 'react-router-dom'
import APIManager from '../helpers/APIManager'
import Settings from '../helpers/Settings';

class CustomerEditForm extends Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    address: "",
    city: "",
    phone: ""
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
    APIManager.getOne('customers', this.props.match.params.customerId)
    .then(item => {
      console.log(item)
        this.setState({
          first_name: item.user.first_name,
          last_name: item.user.last_name,
          email: item.user.email,
          username: item.user.username,
          address: item.address,
          city: item.city,
          phone: item.phone
        })
    })
  }

  updateCustomer = () => {
    fetch(`http://localhost:8000/customers/${this.props.match.params.customerId}`, {
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
        "username": this.state.username,
        "address": this.state.address,
        "city": this.state.city,
        "phone": this.state.phone
      })
    })
    .then(() => {
        this.props.history.push("/myaccount")
    })
  }

  render() {
    return (
      <>
        <label htmlFor="first_name">First Name {this.state.first_name}</label><br />
        <label htmlFor="last_name">Last Name   </label>
        <input
          onChange={this.handleInputChange}
          type="text" name="last_name"
          value={this.state.last_name} 
          autoFocus required />< br/>
        <label htmlFor="email">Email         {this.state.email}</label><br />
        <label htmlFor="username">Username   {this.state.username}</label><br />
        <label htmlFor="address">Address   </label>
        <input
          onChange={this.handleInputChange}
          type="text" name="address"
          value={this.state.address} 
          autoFocus required />< br/>
        <label htmlFor="city">City   </label>
        <input
          onChange={this.handleInputChange}
          type="text" name="city"
          value={this.state.city} 
          autoFocus required />< br/>
        <label htmlFor="phone">Phone   </label>
        <input
          onChange={this.handleInputChange}
          type="text" name="phone"
          value={this.state.phone} 
          autoFocus required />< br/>

        <button onClick={this.updateCustomer}>Update Customer</button>
      </>
    )
  }
}

export default CustomerEditForm
