import React, { useState } from 'react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    if (paymentMethod) {
      alert(`Payment successful with ${paymentMethod}`);
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Select Payment Method:</p>
      <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
        <option value="">Select</option>
        <option value="Credit Card">Credit Card</option>
        <option value="PayPal">PayPal</option>
        <option value="UPI">UPI</option>
      </select>
      <br />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Checkout;
