import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../helpers/simpleAuth'

export default function ProductItem(props) {
  return (
    <>
    {/* <a href={props.item.url}> •Name: {props.item.name} •Created At: {props.item.created_at}</a> <br/> */}
    <p>
      <span>•Name: </span>
      {isAuthenticated() ? <Link to={`/products/${props.item.id}`}>{props.item.name}</Link> :
      <span>{props.item.name}</span>}
      •Created At: {props.item.created_at} <br/>
    </p>
    </>
  )
}
