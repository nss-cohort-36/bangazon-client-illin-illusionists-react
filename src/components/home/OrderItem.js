import React, { Component } from 'react'

export default class Order extends Component {

    render() {
        return (
           <div className="order-card">
               <div className="order-card-body">
                   <h4 className="order-card-heading">
                       {this.props.orders.created_at}
                   </h4>
                    <p className="order-card-description"></p>
               </div>
           </div>  
        )
    }
    
}