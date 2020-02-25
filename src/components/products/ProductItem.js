import React from 'react'

export default function ProductItem(props) {
  return (
    <>
    <h3>Product</h3>
    <p> Id: {props.item.id} </p>
    <p> Name: {props.item.name} </p>
    </>
  )
}
