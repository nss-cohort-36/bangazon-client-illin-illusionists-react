import React from 'react'
import { Link } from 'react-router-dom'

export default function Customer(props) {
    return (
        <React.Fragment>
            <section className="profile">
                <h3>{props.customer.user.first_name}<br />
                {props.customer.user.last_name}<br />
                {props.customer.user.email}</h3>
              <Link to={`/customers/${props.customer.id}/edit`}>Edit Customer</Link>            
            </section>
        </React.Fragment>
    )
}

