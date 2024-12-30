import React, { useState } from 'react';

const TrackOrder = () => {
  const [orderStatus] = useState('In Transit');

  return (
    <div>
      <h2>Track Order</h2>
      <p>Current Status: {orderStatus}</p>
    </div>
  );
};

export default TrackOrder;
