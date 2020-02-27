import React, { useState, Component } from 'react'
import { useHistory } from 'react-router-dom'
import APIManager from '../helpers/APIManager'
import Settings from '../helpers/Settings';

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
          first_name: item.user.first_name,
          last_name: item.user.last_name,
          email: item.user.email,
          username: item.user.username
        })
    })
  }

  updateCustomer = () => {
    fetch(`http://localhost:8000/user/${this.props.match.params.customerId}`, {
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

        <button onClick={this.updateCustomer}>Update Customer</button>
      </>
    )
  }
}

export default CustomerEditForm
