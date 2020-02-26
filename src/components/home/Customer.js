import React from 'react'

export default function Customer(props) {
    return (
        <React.Fragment>
            <section className="profile">
                <h3>{props.customer.user.first_name}<br />
                {props.customer.user.last_name}<br />
                {props.customer.user.email}</h3>
            </section>
        </React.Fragment>
    )
}

