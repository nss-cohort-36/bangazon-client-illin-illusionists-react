import React from 'react'

export default function OrderProductItem(props) {
    return (
        <>
            <h3>{props.op.order_id}</h3>
            <h3>{props.op.product_id}</h3>
        </>
    )
}
