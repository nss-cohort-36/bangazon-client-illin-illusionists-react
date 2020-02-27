import React from 'react'
import Customer from './Customer'

export default function CustomerList(props) {

    return (
      <>
        <article className="customerList">
          {
            props.customers.map(customer =>
              <Customer
                key={customer.id}                
                customer={customer}
              />

            )
          }
        </article>
      </>
    )
  }
