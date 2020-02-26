import React, { Component } from 'react';
import Order from './OrderItem';

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
                "Accept": "application/json"
                // "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then(response => this.setState({orders:response}))
    }
    
    render() {
        console.log('ORDERS STATE', this.state.orders.created_at);
        return (
        <div>
            <div className="orders-item-list-container">
                <ul className="orders-item-list">
                    <li className="orders-item-list-item">
                        { this.state.orders.map(order => 
                            <Order key={order.id} url={order.url} created={order.created_at}/> 
                        )
                        }
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}