import React from 'react'

export default function ProductItem(props) {
  return (
    <>
    <h3>Product</h3>
    <a href={props.item.url}>Name: {props.item.name}  Desc: {props.item.description} Created At: {props.item.created_at}</a>
    </>
  )
}
