import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import APIManager from '../helpers/APIManager'

export default function NewPaymentType() {

    const [newPayment, setNewPayment] = useState()
    const history = useHistory()

    const handleInputChange = evt => {
        setNewPayment({
            ...newPayment,
            [evt.target.id]: evt.target.value
        })
    }

    const handleNewPayment = evt => {
        evt.preventDefault()
        const expiration = new Date(newPayment.expiration_date)
        // console.log('expiration', expiration);
        
        const addPayment = {
            acct_no: newPayment.acct_no,
            merchant_name: newPayment.merchant_name,
            expiration_date: expiration.toISOString()
        }
        // console.log('payment', JSON.stringify(addPayment))
        APIManager.createNew('paymenttypes', addPayment)
            .then(history.push('/myaccount'))
        return
    }
    return (
        <main style={{ textAlign: 'center' }}>
			<form className="form--login" onSubmit={handleNewPayment}>
				<h1 className="h3 mb-3 font-weight-normal">Add Payment Type</h1>
				<fieldset>
					<label htmlFor="merchant_name"> Merchant </label>
					<input
						onChange={handleInputChange}
						id="merchant_name"
						type="text"
						name="merchant_name"
						className="form-control"
						placeholder="VISA/MasterCard/etc."
                        required
                        autoFocus
					/>
				</fieldset>
                <fieldset>
					<label htmlFor="acct_no"> Account # </label>
					<input
						onChange={(evt) => handleInputChange(evt)}
						id="acct_no"
						type="text"
						name="acct_no"
                        className="form-control"
                        pattern="[0-9]{16}"
						placeholder="Enter 16-digit card #"
						required
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="expiration_date"> Expiration Date </label>
					<input
						onChange={handleInputChange}
						id="expiration_date"
						type="month"
                        name="expiration_date"
                        min={new Date().toISOString().split('T')[0].slice(0,7)}
						className="form-control"
						required
					/>
				</fieldset>
				<fieldset>
					<button type="submit">Add Payment</button>
				</fieldset>
			</form>
		</main>
    )
}
