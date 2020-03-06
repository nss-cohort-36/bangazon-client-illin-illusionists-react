import React from 'react'
import Payment from './Payment'

export default function PaymentList(props) {

    
    return (
      <>
        <article className="paymentList">
          {
            props.payments.map(payment =>
              <Payment
                key={payment.id}                
                payment={payment}
                deletePayment={props.deletePayment}
                selectPayment={props.selectPayment}
              />)
          }
        </article>
      </>
    )
  }
