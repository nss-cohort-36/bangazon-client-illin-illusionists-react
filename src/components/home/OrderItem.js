import React, { Component } from "react";
import "./OrderItem.css";
import ProductItem from "./ProductItem";
import OrderDetail from "./OrderDetail";
import Settings from "../helpers/Settings";
import APIManager from "../helpers/APIManager"

export default class Order extends Component {
  state = {
    hidePayment: true
  };

  addPaymentToOrder = async paymentId => {
    const body = { payment_type: paymentId };

    await fetch(`http://localhost:8000/orders/${this.props.order.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem(Settings.token_name)}`
      },
      body: JSON.stringify(body)
    });

    this.props.history.push(`/orders/${this.props.order.id}/complete`)
  };

  deleteProductHandler = (id) => {
    this.setState({hidePayment: true})
    
    APIManager.deleteOne("orderproducts", id)
    .then(()=> this.props.getProductsForOrders())}   

  render() {
    return (
      <div className="order-card">
        <div className="order-card-body">
          <h4 className="order-card-heading">Created At</h4>
          <p className="order-card-description">
            {this.props.order.created_at}
          </p>
          <table>
            {this.props.order.orderProducts.map((orderProduct, index) => (
              <tbody key={index}>
                <ProductItem
                  deleteProduct={this.deleteProductHandler}
                  product={orderProduct.product}
                  orderProductId={orderProduct.id}
                />
              </tbody>
            ))}
          </table>
          <div className="order-card-buttons">
            <button
              className="order-card-complete-button"
              onClick={() => this.setState({ hidePayment: false })}>
              Complete Order
            </button>
            <button className="order-card-cancel-button">Cancel Order</button>
          </div>
          <div
            hidden={this.state.hidePayment}
            className="order-card-payment-options">
            <OrderDetail addPaymentToOrder={this.addPaymentToOrder} />
          </div>
        </div>
      </div>
    );
  }
}
