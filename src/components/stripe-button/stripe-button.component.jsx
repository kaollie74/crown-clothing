import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey =
    "pk_test_51HsvtvGHwGnOUb9LrskAKM1CX0KohBz8QTtiIFSBTV8r773ZCgsbyuFMxLtUH67ZjXnRtWNoPiYQkIwCyqqg0Gve00imsnQ7Lu";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfule");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};

export default StripeCheckoutButton;
