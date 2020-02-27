import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem(props) {
  return (
    <>
    {/* <a href={props.item.url}> •Name: {props.item.name} •Created At: {props.item.created_at}</a> <br/> */}
    •Name: <Link to={`/products/${props.item.id}`}>{props.item.name}</Link>  •Created At: {props.item.created_at} <br/>
    </>
  )
}
