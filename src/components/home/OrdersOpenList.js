import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIManager from "../helpers/APIManager";
import "./Reports.css";

const OrdersOpenList = props => {
  const [openOrders, setOpenOrders] = useState([]);

  const getAllOpenOrders = async () => {
    const allOpenOrders = await APIManager.getAll("orders?open=true");
    return allOpenOrders;
  };

  useEffect(() => {
    const updateOpenOrders = async () => {
      const newOpenOrders = await getAllOpenOrders();
      setOpenOrders(newOpenOrders);
    };
    updateOpenOrders();
  }, []);

  return (
    <div className="incomplete-orders-container">
      <h2>Customers with open orders</h2>
      {openOrders.map(order => (
        <div key={order.id} className="incomplete-order-customer-container">
          <h3 className="incomplete-order-customer-order">
            {order.customer.user.first_name} {order.customer.user.last_name} - Order #{order.id}
          </h3>
          <ol className="incomplete-orders-product-list">
            {order.cart.map((item, index) => (
              <li key={index}>{item.product.name}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default OrdersOpenList;
