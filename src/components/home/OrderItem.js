import React, { Component } from "react";
import "./OrderItem.css";
import ProductItem from "./ProductItem";

export default class Order extends Component {
  render() {
    return (
      <div className="order-card">
        <div className="order-card-body">
          <h4 className="order-card-heading">Created At</h4>
          <p className="order-card-description">{this.props.created}</p>
          <ol>
            {this.props.products.map(product => (
              <li key={product.id}><ProductItem product={product} /></li>
            ))}
          </ol>
          <button className="order-card-complete-button">Complete Order</button>
          <button className="order-card-cancel-button">Cancel Order</button>
        </div>
      </div>
    );
  }
}
