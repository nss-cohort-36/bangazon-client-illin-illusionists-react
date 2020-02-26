import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function ProductFormSell() {
    const [product, setProduct] = useState()
    const history = useHistory()

    // Grab values from form fields and set to state
    const handleFieldChange = event => {
        setProduct({
            ...product,
            [event.target.id]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventdefault()

        const newproduct = {
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "quantity": product.quantity,
            "location": product.location,
            "image_path": product.image_path,
            "product_type_id": product.product_type_id
        }
    }

    return (
        <>
            <main>
                <form>
                    <fieldset>
                    <label htmlFor="name">Product Name</label>
                    <input 
                    onChange={handleFieldChange}
                    id="name"
                    />
                    </fieldset>
                    <fieldset>
                    <label htmlFor="price">Price</label>
                    <input 
                    onChange={handleFieldChange}
                    id="price"
                    Price />
                    </fieldset>
                    <fieldset>
                    <label htmlFor="description">Description</label>
                    <input id="description" 
                    onChange={handleFieldChange}
                    Description />
                    </fieldset>
                    <fieldset>
                    <label htmlFor="quantity">Quantity</label>
                    <input
                    id="quantity" 
                    onChange={handleFieldChange} />
                    </fieldset>
                    <fieldset>
                    <label htmlFor="location">Location</label>
                    <input 
                    id="location"
                    onChange={handleFieldChange} />
                    </fieldset>
                    <fieldset>
                    <label htmlFor="image_path">Image Path</label>
                    <input 
                    id="image_path"
                    onChange={handleFieldChange} />
                    </fieldset>
                    <fieldset>
                        
                    <label></label>
                    <input 
                    onChange={handleFieldChange} />
                    </fieldset>  
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </main>
        </>
    )
}
