import React, { Component } from "react";
import Order from "./OrderItem";
import "./OrdersItemList.css";

export default class OrdersList extends Component {
  state = {
    orders: []
  };

  async componentDidMount() {
    // await this.getAllOrders();
    await this.getProductsForOrders();
  }

  getAllOrders = () => {
    return fetch("http://localhost:8000/orders?self=true", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${sessionStorage.getItem("bangazon_token")}`
      }
    })
      .then(response => response.json())
      // .then(response => this.setState({ orders: response }));
  };

  getProductsForOrders = async () => {
    const ordersWithProducts = await this.getAllOrders();
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
      order["products"] = productsInOrder.map(
        productInOrder => productInOrder.product
      );
    };
    this.setState({ orders: ordersWithProducts });
  };

  render() {
    return (
      <div>
        <div className="header-container">
          <h2 className="order-list-header">Recent Orders</h2>
        </div>
        <div className="orders-item-list-container">
          {this.state.orders.map(order => (
            <Order
              key={order.id}
              url={order.url}
              created={order.created_at}
              products={order.products}
            />
          ))}
        </div>
      </div>
    );
  }
}
