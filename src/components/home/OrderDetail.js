import React, { useState, useEffect } from "react";
import APIManager from "../helpers/APIManager";
import PaymentList from "./PaymentList";
import { Link } from "react-router-dom";

const OrderDetail = props => {
  const [paymentTypes, setPaymentTypes] = useState([]);

  const paymentTypeHandler = async () => {
    const types = await APIManager.getAll("paymenttypes");
    setPaymentTypes(types);
  };

  const selectPaymentHandler = paymentId => {
    const confirmation = window.confirm("Use this payment for the order?");

    if (confirmation) {
      props.addPaymentToOrder(paymentId);
    }
  };

  useEffect(() => {
    const getPaymentTypes = async () => {
      await paymentTypeHandler();
    };
    getPaymentTypes();
  }, []);

  return (
    <div>
      {paymentTypes.length > 0 ? (
        <>
          <h3>Select Payment Method</h3>
          <PaymentList
            payments={paymentTypes}
            selectPayment={selectPaymentHandler}
          />{" "}
        </>
      ) : (
        <>
          <h3>Add Payment Method</h3>
          <Link to="/paymenttype/new">Add New Payment Type</Link>
        </>
      )}
    </div>
  );
};

export default OrderDetail;
