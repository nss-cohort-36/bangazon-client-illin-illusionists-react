import React, { useState, useEffect } from "react";
import APIManager from "../helpers/APIManager";
import PaymentList from "./PaymentList";

const OrderDetail = props => {
  const [paymentTypes, setPaymentTypes] = useState([]);

  const paymentTypeHandler = async () => {
    const types = await APIManager.getAll("paymenttypes");
    setPaymentTypes(types);
  };

  const selectPaymentHandler = paymentId => {
    const confirmation = window.confirm("Use this payment for the order?")
    
    if (confirmation) {
      props.addPaymentToOrder(paymentId)
    }
  }

  useEffect(() => {
    const getPaymentTypes = async () => {
      await paymentTypeHandler();
    };
    getPaymentTypes();
  }, []);

  return (
    <div>
      <h3>Select Payment Method</h3>
      <PaymentList payments={paymentTypes} selectPayment={selectPaymentHandler} />
    </div>
  );
};

export default OrderDetail;
