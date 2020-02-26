import React from 'react'

export default function Payment(props) {
    return (
        <React.Fragment>
            <section className="payment">
                <p>
                {props.payment.merchant_name}<br />
                {props.payment.acct_no}<br />
                {props.payment.expiration_date.slice(0,10)}<br />
                </p>
            </section>
        </React.Fragment>
    )
}

