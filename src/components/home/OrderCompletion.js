import React from "react";

const OrderCompletion = props => {
  return (
    <div>
      <h3>Thanks for your order!</h3>
      <p>Your order number is #{props.orderId}!</p>
      <p>It will be ready for you shortly!</p>
      <p>I like exclamation points!!!</p>
    </div>
  );
};

export default OrderCompletion;
