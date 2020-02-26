import React, { useEffect, useState } from 'react'
import PaymentList from './PaymentList'
import CustomerList from './CustomerList'
import APIManager from '../helpers/APIManager'

export default function MyAccount(props) {

// [variable, function to update state of variable = useState is a hook and the [] is the initial of that variable]
  const [payments, setPayments] = useState([]);
  const [customers, setCustomers] = useState([]);

  const getPayments = () => {
    //get customer payment types
    APIManager.getAll('paymenttypes')
    .then(setPayments)
  
  }

  const getCustomers = () => {
    //get current user
    APIManager.getAll('customers')
    .then((response) => {
      console.log(response)
      return setCustomers()})
    
  }
// useEffect like a superpowered componentDidMount; getPayments runs; dependency array with multiple variables or functions
  useEffect(getPayments, []);
  useEffect(getCustomers, []);


  return (
        <>
          <main className="profile">
            {/* <CustomerList {...props} customers={customers} />
            <PaymentList {...props} payments={payments}/> */}
          </main>
        </>
  )
  
}