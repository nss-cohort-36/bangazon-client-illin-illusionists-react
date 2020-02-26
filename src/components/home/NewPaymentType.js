import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function NewPaymentType() {

    const [newPayment, setNewPayment] = useState()
    const history = useHistory()

    const handleInputChange = evt => {
        setNewPayment({
            ...newPayment,
            [evt.target.id]: evt.target.value
        }, console.log(newPayment))
    }

    const handleNewPayment = evt => {
        evt.preventDefault()
        
        const addPayment = {
            acct_no: newPayment.acct_no,
            merchant_name: newPayment.merchant_name,
            expiration_date: newPayment.expiration_date
        }
        console.log('payment', addPayment)
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
						placeholder="0000111122223333"
						required
						autoFocus
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="expiration_date"> Expiration Date </label>
					<input
						onChange={handleInputChange}
						id="expiration_date"
						type="month"
						name="expiration_date"
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
