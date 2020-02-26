import React, { Component } from 'react'
import './OrderItem.css'

export default class Order extends Component {

    render() {
      console.log('props in the order', this.props)
        return (
           <div className="order-card">
               <div className="order-card-body">
                   <h4 className="order-card-heading" >
                      Created At
                   </h4>
                    <p className="order-card-description">{this.props.created}</p>
               </div>
           </div>  
        )
    }
    
}