import React, { Component } from 'react'
import Order from './OrderItem'
import './OrdersItemList.css'

export default class OrdersList extends Component {
    
    state = {
        orders: []
    }
    
    componentDidMount(){
        this.getAllOrders()
    }

    getAllOrders = () => {
        fetch('http://localhost:8000/orders', {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then(response => this.setState({orders:response}))
    }
    
    render() {
        console.log('ORDERS STATE', this.state);
        return (
        <div>
            <div className="header-container">
                <h2 className="order-list-header">Recent Orders</h2>
            </div>
            <div className="orders-item-list-container">
                        { this.state.orders.map(order => 
                            <Order key={order.id} url={order.url} created={order.created_at}/> 
                        )
                        }
            </div>
        </div>
        )
    }
}