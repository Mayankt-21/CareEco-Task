import React, { useState } from 'react';

const OrderHistory = () => {
  const [orders] = useState([
    { id: 1, date: '2023-01-01', total: 150 },
    { id: 2, date: '2023-01-15', total: 200 },
  ]);

  return (
    <div>
      <h2>Order History</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order #{order.id} - {order.date} - Total: ${order.total}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default OrderHistory;
