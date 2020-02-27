import React from 'react'
import { Link } from 'react-router-dom'

export default function Customer(props) {
    return (
        <React.Fragment>
            <section className="profile">
                <h3>First Name {props.customer.user.first_name}<br />
                Last Name {props.customer.user.last_name}<br />
                Email {props.customer.user.email}<br />
                Address {props.customer.address}<br />
                City {props.customer.city}<br />
                Phone {props.customer.phone}</h3>
              <Link to={`/customers/${props.customer.id}/edit`}>Edit Customer</Link>            
            </section>
        </React.Fragment>
    )
}

