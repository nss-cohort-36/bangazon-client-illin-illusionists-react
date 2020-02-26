import React, { useEffect, useState } from 'react'
import PaymentList from './PaymentList'
import CustomerList from './CustomerList'
import APIManager from '../helpers/APIManager'
import { Link } from 'react-router-dom';

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
    .then(setCustomers)
    
  }
// useEffect like a superpowered componentDidMount; getPayments runs; dependency array with multiple variables or functions
  useEffect(getPayments, []);
  useEffect(getCustomers, []);


  return (
        <>
          <main className="profile">
            <Link to="/paymenttype/new">Add New Payment Type</Link>
            <CustomerList {...props} customers={customers} />
            <PaymentList {...props} payments={payments}/>
          </main>
        </>
  )
  
}