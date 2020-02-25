import React, { useState, useEffect } from 'react';
import Settings from '../helpers/Settings';
import OrderProduct from './OrderProduct';
import APIManager from '../helpers/APIManager'

export default function OrderProductList() {

    const [ orderProductList, setOrderProductList ] = useState([]);

        const getOrderProductList = () => {
            APIManager.getAll('orderproducts')
            .then(setOrderProductList)
        }

        useEffect(getOrderProductList, [])

    return (
        <>
        
        
            
        </>
    )
}
