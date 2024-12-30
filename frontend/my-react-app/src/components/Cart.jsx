/*import React from 'react';

const Cart = () => {
  // Replace with actual cart logic
  const cartItems = [
    { id: 1, title: 'Product 1', price: 10, quantity: 2 },
    { id: 2, title: 'Product 2', price: 20, quantity: 1 },
  ];

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
*/
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 2, price: 50 },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
