import React, { Component } from "react";
import Order from "./OrderItem";
import "./OrdersItemList.css";
import APIManager from '../helpers/APIManager'

export default class OrdersList extends Component {
  state = {
    orders: []
  };

  async componentDidMount() {
    await this.getProductsForOrders();
  }

  getAllOpenOrders = async () => {
    return await APIManager.getAll(`orders?self=true&open=true`)
  };

  getProductsForOrders = async () => {
    const ordersWithProducts = await this.getAllOpenOrders();
    for (const order of ordersWithProducts) {
      const productsInOrderResponse = await fetch(
        `http://localhost:8000/orderproducts?order=${order.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Token ${sessionStorage.getItem("bangazon_token")}`
          }
        }
      );
      const productsInOrder = await productsInOrderResponse.json();
      order["orderProducts"] = productsInOrder
    }
    this.setState({ orders: ordersWithProducts });
  };

  

  render() {
    return (
      <div>
        <div className="header-container">
          <h2 className="order-list-header">Shopping Cart</h2>
        </div>
        <div className="orders-item-list-container">
          {!this.state.orders ? (
            <p>Shopping cart is empty</p>
          ) : (
            this.state.orders.map(order => (
              <Order
                key={order.id}
                order={order}
                {...this.props}
                getProductsForOrders={this.getProductsForOrders}
              />

            ))
          )}
        </div>
      </div>
    );
  }
}
