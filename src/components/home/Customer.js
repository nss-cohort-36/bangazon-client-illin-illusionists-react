import React from 'react'
import { Link } from 'react-router-dom'

export default function Customer(props) {
    return (
        <React.Fragment>
            <section className="profile">
                <label className="form-label">First Name</label>
                <p className="form-desc">{props.customer.user.first_name}</p>
                <label className="form-label">Last Name</label>
                <p className="form-desc">{props.customer.user.last_name}</p>
                <label className="form-label">Email</label>
                <p className="form-desc">{props.customer.user.email}</p>
                <label className="form-label">Address</label>
                <p className="form-desc">{props.customer.address}</p>
                <label className="form-label">City</label>
                <p className="form-desc">{props.customer.city}</p>
                <label className="form-label">Phone</label>
                <p className="form-desc">{props.customer.phone}</p>
              <Link to={`/customers/${props.customer.id}/edit`}>Edit Customer</Link> 
              <br />
              <br />           
            </section>
        </React.Fragment>
    )
}

